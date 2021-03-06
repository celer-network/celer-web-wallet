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
  width: 84px;
  && {
    color: #ffffff;
    border-radius: 14px;
    background-color: #1281ff;
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
  }
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
