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

import { Box, InputAdornment, OutlinedInput } from '@material-ui/core';

import { ClientContext, ClientState } from '../ClientContext';
import { TxStatus } from '../utils/utils';
import BoxWithMarginTop from './common/BoxWithMarginTop';
import CelerButton from './common/CelerButton';
import CenteredFlexWithMarginTop from './common/CenteredFlexWithMarginTop';
import ErrorPrompt from './common/ErrorPrompt';
import Header from './common/Header';
import OnChainPrompt from './common/OnChainPrompt';
import SuccessPrompt from './common/SuccessPrompt';
import Title from './common/Title';

const DepositCard: React.FC = () => {
  const { client } = useContext<ClientState>(ClientContext);

  const history = useHistory();
  const locationState = history.location.state;
  const channelId = locationState && locationState.channelId;
  const tokenType = locationState && locationState.tokenType;
  const tokenAddress = locationState && locationState.tokenAddress;

  const [amountEth, setAmountEth] = useState<string>('');
  const [status, setStatus] = useState<TxStatus>(TxStatus.IDLE);
  const [error, setError] = useState<string>('');

  if (!client || !channelId || !tokenType || !tokenAddress) {
    history.replace('/');
    return null;
  }

  const close = () => {
    history.replace('/tokens');
  };

  const deposit = async () => {
    const amountWei = ethers.utils.parseEther(amountEth).toString();
    const promise = client.deposit(
      channelId,
      tokenType === 'ETH' ? TokenType.ETH : TokenType.ERC20,
      amountWei
    );
    setStatus(TxStatus.PROCESSING);
    try {
      await promise;
      setStatus(TxStatus.SUCCEEDED);
    } catch (e) {
      setError(e.message || e.toString());
      setStatus(TxStatus.FAILED);
    }
  };

  const card = (
    <CenteredFlexWithMarginTop>
      <BoxWithMarginTop>
        <Header text="Deposit" close={close} />
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
      <Box marginTop="2em">
        <CelerButton onClick={deposit}>Done</CelerButton>
      </Box>
    </CenteredFlexWithMarginTop>
  );

  const processingPrompt = (
    <OnChainPrompt
      title="Depositing"
      prompt="Do not close your window until deposit is complete"
    />
  );

  const successPrompt = (
    <SuccessPrompt
      title="Deposit succeeded"
      doneCallback={() => history.replace(`/token/${tokenAddress}`)}
    ></SuccessPrompt>
  );

  const errorPrompt = <ErrorPrompt title="Deposit failed" prompt={error} />;

  switch (status) {
    case TxStatus.IDLE:
      return card;
    case TxStatus.PROCESSING:
      return processingPrompt;
    case TxStatus.SUCCEEDED:
      return successPrompt;
    case TxStatus.FAILED:
      return errorPrompt;
  }
};

export default DepositCard;
