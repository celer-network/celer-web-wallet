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

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { List } from '@material-ui/core';

import { ClientContext, ClientState } from '../../ClientContext';
import CenteredFlexWithMarginTop from '../common/CenteredFlexWithMarginTop';
import Title from '../common/Title';
import TokenListItem from './TokenListItem';
import tokens from './tokens.json';

export interface TokenDisplayInfo {
  name: string;
  type: string;
  address: string;
  symbol: string;
  iconUrl: string;
  minDeposit: string;
  maxDeposit: string;
}

const TokenList: React.FC = () => {
  const { client } = useContext<ClientState>(ClientContext);
  const history = useHistory();
  let tokenDisplayInfos: TokenDisplayInfo[] = [];

  if (!client) {
    history.replace('/');
    return null;
  }

  for (const token of tokens) {
    tokenDisplayInfos.push({
      name: token.name,
      type: token.type,
      address: token.address,
      symbol: token.symbol,
      iconUrl: token.iconUrl,
      minDeposit: token.depositLimits.minDeposit,
      maxDeposit: token.depositLimits.maxDeposit
    });
  }

  return (
    <CenteredFlexWithMarginTop alignItems="left">
      <Title left="25%">Available tokens</Title>
      <List>
        {tokenDisplayInfos.map((info, i) => (
          <TokenListItem key={i} client={client} tokenDisplayInfo={info} />
        ))}
      </List>
    </CenteredFlexWithMarginTop>
  );
};

export default TokenList;
