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

import { TokenType } from 'celer-light-client';
import { ethers } from 'ethers';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { InputAdornment, OutlinedInput } from '@material-ui/core';

import { ClientContext, ClientState } from '../ClientContext';
import BoxWithMarginTop from './common/BoxWithMarginTop';
import CelerButton from './common/CelerButton';
import CenteredFlexWithMarginTop from './common/CenteredFlexWithMarginTop';
import Header from './common/Header';
import Title from './common/Title';

const SendCard: React.FC = () => {
  const { client } = useContext<ClientState>(ClientContext);

  const history = useHistory();
  const tokenType = history.location.state.tokenType;
  const tokenAddress = history.location.state.tokenAddress;

  const [destination, setDestination] = useState<string>('');
  const [amountEth, setAmountEth] = useState<string>('');

  if (!client || !tokenType || !tokenAddress) {
    history.replace('/');
    return null;
  }

  const close = () => {
    history.replace('/tokens');
  };

  const send = async () => {
    const amountWei = ethers.utils.parseEther(amountEth).toString();
    await client.sendPayment(
      tokenType === 'ETH' ? TokenType.ETH : TokenType.ERC20,
      tokenAddress,
      destination,
      amountWei
    );
    history.replace('/tokens');
  };

  return (
    <CenteredFlexWithMarginTop>
      <BoxWithMarginTop>
        <Header text="Send" close={close} />
        <Title marginTop="1em">Destination address</Title>
        <OutlinedInput
          style={{ marginTop: '1em', width: '100%' }}
          labelWidth={0}
          onChange={event => setDestination(event.target.value)}
          inputProps={{
            'aria-label': 'destination'
          }}
        />
        <Title marginTop="1em">Amount</Title>
        <OutlinedInput
          style={{ marginTop: '1em', width: '100%' }}
          labelWidth={0}
          onChange={event => setAmountEth(event.target.value)}
          endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
          inputProps={{
            'aria-label': 'amount'
          }}
        />
      </BoxWithMarginTop>
      <CelerButton style={{ marginTop: '2em' }} onClick={send}>
        Done
      </CelerButton>
    </CenteredFlexWithMarginTop>
  );
};

export default SendCard;
