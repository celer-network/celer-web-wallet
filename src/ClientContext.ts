import { Celer } from 'celer-light-client';
import React from 'react';

export interface ClientState {
  client?: Celer;
  setClient: React.Dispatch<React.SetStateAction<Celer | undefined>>;
}

const emptyClientState = {
  client: undefined,
  setClient: (): void => {}
};

export const ClientContext = React.createContext<ClientState>(emptyClientState);
