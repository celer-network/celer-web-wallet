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
