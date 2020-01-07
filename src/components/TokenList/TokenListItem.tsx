/**
 * @license
 * The MIT License
 *
 * Copyright (c) 2019 Celer Network
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { Celer } from 'celer-light-client';
import { ethers } from 'ethers';
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
  position: absolute;
  right: 0px;

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
      tokenAddress: tokenDisplayInfo.address,
      minDeposit: tokenDisplayInfo.minDeposit,
      maxDeposit: tokenDisplayInfo.maxDeposit
    });
  };

  let status: ReactElement;
  if (isLoading) {
    status = (
      <SmallPrompt position="absolute" right="0px">
        Loading
      </SmallPrompt>
    );
  } else {
    if (balanceInfo.activated) {
      const formatted = String(
        Number(ethers.utils.formatEther(balanceInfo.balance)).toFixed(4)
      );
      status = (
        <SmallPrompt textAlign="right" position="absolute" right="0px">
          {formatted + ' ETH'}
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
      <Flex flexDirection="column">
        <Title fontWeight="normal">{tokenDisplayInfo.name}</Title>
        <SmallPrompt textAlign="left">{tokenDisplayInfo.symbol}</SmallPrompt>
      </Flex>
      {status}
    </ListItem>
  );
};

export default TokenListItem;
