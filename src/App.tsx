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

import './App.css';

import { Celer } from 'celer-light-client';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    </ClientContext.Provider>
  );
};

export default App;
