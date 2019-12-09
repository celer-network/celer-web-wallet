import { Celer } from 'celer-light-client';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Text } from 'rimble-ui';
import styled from 'styled-components';

import { Avatar, Button, ListItem } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import { CELER_FONT } from '../../utils/utils';
import SmallPrompt from '../common/SmallPrompt';
import Title from '../common/Title';
import { TokenDisplayInfo } from './TokenList';

interface TokenListItemProps {
  client: Celer;
  tokenDisplayInfo: TokenDisplayInfo;
}

interface BalanceInfo {
  activated: boolean;
  balance: string;
}

const ActivateButton = styled(Button)`
  height: 28px;
  width: 64px;
  border-radius: 14px;
  background-color: #1281ff;
  text-transform: none;

  &:hover {
    background-color: #90caf9;
  }
`;

const TokenListItem: React.FC<TokenListItemProps> = ({
  client,
  tokenDisplayInfo
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [channelId, setChannelId] = useState<string>('');
  const [balanceInfo, setBalanceInfo] = useState<BalanceInfo>({
    activated: false,
    balance: '0'
  });
  const history = useHistory();

  useEffect(() => {
    const getBalance = async () => {
      const channelIds = await client.getAllPaymentChannelIdsForToken(
        tokenDisplayInfo.address
      );
      setIsLoading(false);
      if (channelIds.length === 0) {
        setBalanceInfo({ activated: false, balance: '0' });
      } else {
        const channelId = channelIds[0];
        setChannelId(channelId);
        const channel = await client.getPaymentChannelInfo(channelId);
        setBalanceInfo({
          activated: true,
          balance: channel.balance.freeSendingCapacity
        });
      }
    };
    getBalance();
    const interval = setInterval(() => getBalance(), 1000);
    return () => clearInterval(interval);
  }, [client, tokenDisplayInfo.address]);

  const activate = async () => {
    history.replace('/activate', {
      tokenType: tokenDisplayInfo.type,
      tokenAddress: tokenDisplayInfo.address
    });
  };

  let status: ReactElement;
  if (isLoading) {
    status = <SmallPrompt>Loading</SmallPrompt>;
  } else {
    if (balanceInfo.activated) {
      status = (
        <SmallPrompt textAlign="right" minWidth="250px">
          {balanceInfo.balance + ' wei'}
        </SmallPrompt>
      );
    } else {
      status = (
        <StylesProvider injectFirst>
          <ActivateButton onClick={activate}>
            <Text fontFamily={CELER_FONT} fontSize="12px" color="#FFFFFF">
              Activate
            </Text>
          </ActivateButton>
        </StylesProvider>
      );
    }
  }

  const enterTokenDetails = () => {
    if (balanceInfo.activated) {
      history.replace(`/token/${tokenDisplayInfo.address}`, {
        channelId,
        tokenType: tokenDisplayInfo.type,
        tokenAddress: tokenDisplayInfo.address,
        tokenSymbol: tokenDisplayInfo.symbol
      });
    }
  };

  return (
    <ListItem divider={true} onClick={enterTokenDetails}>
      <Avatar
        style={{ margin: '8px' }}
        alt={tokenDisplayInfo.name}
        src={tokenDisplayInfo.iconUrl}
      />
      <Flex minWidth="100px" flexDirection="column">
        <Title fontWeight="normal">{tokenDisplayInfo.name}</Title>
        <SmallPrompt textAlign="left">{tokenDisplayInfo.symbol}</SmallPrompt>
      </Flex>
      {status}
    </ListItem>
  );
};

export default TokenListItem;
