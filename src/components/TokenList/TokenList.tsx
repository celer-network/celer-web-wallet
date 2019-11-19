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
      iconUrl: token.iconUrl
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
