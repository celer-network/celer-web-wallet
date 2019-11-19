import './App.css';

import { Celer } from 'celer-light-client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ClientContext } from './ClientContext';
import ActivateCard from './components/ActivateCard';
import ConnectCard from './components/ConnectCard/ConnectCard';
import DepositCard from './components/DepositCard';
import SendCard from './components/SendCard';
import TokenDetails from './components/TokenDetails/TokenDetails';
import TokenList from './components/TokenList/TokenList';
import WithdrawCard from './components/WithdrawCard';

const App: React.FC = () => {
  const [client, setClient] = useState<Celer | undefined>(undefined);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      <Router>
        <Switch>
          <Route path="/connect">
            <ConnectCard />
          </Route>
          <Route path="/tokens">
            <TokenList />
          </Route>
          <Route path="/token/:address">
            <TokenDetails />
          </Route>
          <Route path="/activate">
            <ActivateCard />
          </Route>
          <Route path="/send">
            <SendCard />
          </Route>
          <Route path="/deposit">
            <DepositCard />
          </Route>
          <Route path="/withdraw">
            <WithdrawCard />
          </Route>
          <Route
            path="/"
            children={() => (client ? <TokenList /> : <ConnectCard />)}
          ></Route>
        </Switch>
      </Router>
    </ClientContext.Provider>
  );
};

export default App;
