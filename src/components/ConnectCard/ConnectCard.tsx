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
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ClientContext, ClientState } from '../../ClientContext';
import BoxWithMarginTop from '../common/BoxWithMarginTop';
import CelerButton from '../common/CelerButton';
import CenteredFlexWithMarginTop from '../common/CenteredFlexWithMarginTop';
import SmallPrompt from '../common/SmallPrompt';
import localConfig from './local_config.json';
import localContractsInfo from './local_contracts.json';
import mainnetConfig from './mainnet_config.json';
import mainnetContractsInfo from './mainnet_contracts.json';
import ropstenConfig from './ropsten_config.json';
import ropstenContractsInfo from './ropsten_contracts.json';

declare global {
  interface Window {
    ethereum: {
      send: (method: string, params: any) => Promise<any>;
      enable: Function;
      autoRefreshOnNetworkChange: boolean;
    };
    web3: { currentProvider: object };
  }
}

const ConnectCard: React.FC = () => {
  const { client, setClient } = useContext<ClientState>(ClientContext);
  const history = useHistory();

  if (client) {
    history.replace('/tokens');
    return null;
  }

  const connect = async () => {
    if (
      typeof window.ethereum === 'undefined' &&
      typeof window.web3 === 'undefined'
    ) {
      return;
    }
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
      await window.ethereum.enable();
    }
    const provider = new ethers.providers.Web3Provider(
      window.ethereum || window.web3.currentProvider
    );

    let config;
    let contractsInfo;
    const network = await provider.getNetwork();
    switch (network.name) {
      case 'homestead':
        config = mainnetConfig;
        contractsInfo = mainnetContractsInfo;
        break;
      case 'ropsten':
        config = ropstenConfig;
        contractsInfo = ropstenContractsInfo;
        break;
      default:
        config = localConfig;
        contractsInfo = localContractsInfo;
    }
    const client = await Celer.create(
      window.ethereum || window.web3.currentProvider,
      0,
      contractsInfo,
      config
    );
    setClient(client);
    history.replace('/tokens');
  };

  return (
    <CenteredFlexWithMarginTop>
      <BoxWithMarginTop>
        <SmallPrompt width="272px">
          This website would like to connect your Celer Pay account
        </SmallPrompt>
      </BoxWithMarginTop>
      <BoxWithMarginTop>
        <CelerButton onClick={connect}>Connect wallet</CelerButton>
      </BoxWithMarginTop>
    </CenteredFlexWithMarginTop>
  );
};

export default ConnectCard;
