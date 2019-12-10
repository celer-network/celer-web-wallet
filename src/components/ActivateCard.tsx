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
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { InputAdornment, OutlinedInput } from '@material-ui/core';

import { ClientContext, ClientState } from '../ClientContext';
import { TxStatus } from '../utils/utils';
import BoxWithMarginTop from './common/BoxWithMarginTop';
import CelerButton from './common/CelerButton';
import CenteredFlexWithMarginTop from './common/CenteredFlexWithMarginTop';
import ErrorPrompt from './common/ErrorPrompt';
import Header from './common/Header';
import OnChainPrompt from './common/OnChainPrompt';
import SmallPrompt from './common/SmallPrompt';
import SuccessPrompt from './common/SuccessPrompt';
import Title from './common/Title';

interface ActivateCardState {
  tokenType: string;
  tokenAddress: string;
}

const ActivateCard: React.FC = () => {
  const { client } = useContext<ClientState>(ClientContext);

  const history = useHistory<ActivateCardState>();
  const locationState = history.location.state;
  const tokenType = locationState && locationState.tokenType;
  const tokenAddress = locationState && locationState.tokenAddress;

  const [amount, setAmount] = useState<string>('');
  const [status, setStatus] = useState<TxStatus>(TxStatus.IDLE);
  const [error, setError] = useState<string>('');

  if (!client || !tokenType || !tokenAddress) {
    history.replace('/');
    return null;
  }

  const close = () => {
    history.replace('/tokens');
  };

  const activate = async () => {
    const promise = client.openPaymentChannel(
      tokenType === 'ETH' ? TokenType.ETH : TokenType.ERC20,
      tokenAddress,
      amount,
      amount
    );
    setStatus(TxStatus.PROCESSING);
    try {
      await promise;
      setStatus(TxStatus.SUCCEEDED);
    } catch (e) {
      setError(e.toString());
      setStatus(TxStatus.FAILED);
    }
  };

  const card = (
    <CenteredFlexWithMarginTop>
      <BoxWithMarginTop>
        <Header text="Activate" close={close} />
        <Title marginTop="1em">Initial deposit</Title>
        <OutlinedInput
          style={{ marginTop: '1em', width: '100%' }}
          labelWidth={0}
          onChange={event => setAmount(event.target.value)}
          endAdornment={<InputAdornment position="end">wei</InputAdornment>}
          inputProps={{
            'aria-label': 'amount'
          }}
        />
        <SmallPrompt textAlign="left">
          Deposit to activate Celer Pay
        </SmallPrompt>
      </BoxWithMarginTop>
      <CelerButton style={{ marginTop: '2em' }} onClick={activate}>
        Done
      </CelerButton>
    </CenteredFlexWithMarginTop>
  );

  const activatingPrompt = (
    <OnChainPrompt
      title="Activating"
      prompt="Do not close your window until activation is complete"
    />
  );

  const successPrompt = (
    <SuccessPrompt
      title="Activate succeeded"
      doneCallback={() => history.replace('/tokens')}
    ></SuccessPrompt>
  );

  const errorPrompt = <ErrorPrompt title="Activate failed" prompt={error} />;

  switch (status) {
    case TxStatus.IDLE:
      return card;
    case TxStatus.PROCESSING:
      return activatingPrompt;
    case TxStatus.SUCCEEDED:
      return successPrompt;
    case TxStatus.FAILED:
      return errorPrompt;
  }
};

export default ActivateCard;
