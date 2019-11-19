import { TokenType } from 'celer-light-client';
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

  const [amount, setAmount] = useState<string>('');
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
    const promise = client.deposit(
      channelId,
      tokenType === 'ETH' ? TokenType.ETH : TokenType.ERC20,
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
        <Header text="Deposit" close={close} />
        <Title marginTop="1em">Amount</Title>
        <OutlinedInput
          style={{ marginTop: '1em', width: '100%' }}
          labelWidth={0}
          onChange={event => setAmount(event.target.value)}
          endAdornment={<InputAdornment position="end">wei</InputAdornment>}
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
