import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex } from 'rimble-ui';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import CenteredFlexWithMarginTop from '../common/CenteredFlexWithMarginTop';
import TokenDetailsHeader from './TokenDetailsHeader';

interface TokenDetailsState {
  channelId: string;
  tokenType: string;
  tokenSymbol: string;
  tokenAddress: string;
}

const StyledButton = styled(Button)`
  height: 28px;
  width: 64px;
  border-radius: 14px;
  background-color: #1281ff;
  text-transform: none;

  &:hover {
    background-color: #90caf9;
  }
`;

const TokenDetails: React.FC = () => {
  const history = useHistory<TokenDetailsState>();
  const locationState = history.location.state;
  const channelId = locationState && locationState.channelId;
  const tokenType = locationState && locationState.tokenType;
  const tokenSymbol = locationState && locationState.tokenSymbol;
  const tokenAddress = locationState && locationState.tokenAddress;

  if (!channelId || !tokenType || !tokenSymbol || !tokenAddress) {
    history.replace('/');
    return null;
  }

  return (
    <CenteredFlexWithMarginTop>
      <TokenDetailsHeader symbol={tokenSymbol} />
      <Flex>
        <StylesProvider injectFirst>
          <StyledButton
            onClick={() =>
              history.replace('/deposit', {
                channelId,
                tokenType,
                tokenSymbol,
                tokenAddress
              })
            }
          >
            Deposit
          </StyledButton>
        </StylesProvider>
        <StylesProvider injectFirst>
          <StyledButton
            onClick={() =>
              history.replace('/withdraw', {
                channelId,
                tokenType,
                tokenSymbol,
                tokenAddress
              })
            }
          >
            Withdraw
          </StyledButton>
        </StylesProvider>
        <StylesProvider injectFirst>
          <StyledButton
            onClick={() =>
              history.replace('/send', {
                channelId,
                tokenType,
                tokenSymbol,
                tokenAddress
              })
            }
          >
            Send
          </StyledButton>
        </StylesProvider>
      </Flex>
    </CenteredFlexWithMarginTop>
  );
};

export default TokenDetails;
