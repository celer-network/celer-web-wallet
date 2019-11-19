import { TokenType } from 'celer-light-client';
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
  const [amount, setAmount] = useState<string>('');

  if (!client || !tokenType || !tokenAddress) {
    history.replace('/');
    return null;
  }

  const close = () => {
    history.replace('/tokens');
  };

  const send = async () => {
    await client.sendPayment(
      tokenType === 'ETH' ? TokenType.ETH : TokenType.ERC20,
      tokenAddress,
      destination,
      amount
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
          onChange={event => setAmount(event.target.value)}
          endAdornment={<InputAdornment position="end">wei</InputAdornment>}
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
