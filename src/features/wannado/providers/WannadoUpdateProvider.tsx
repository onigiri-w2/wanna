import {createContext} from 'react';

import {updateWannadoTitle as updateWannadoTitleDDD} from '@/domain/usecase/wannado';
import {WannadoUpdater} from '@/recoil/states/wannadoOverview/actions';

type ProviderProps = {
  children: React.ReactNode;
};
export const WannadoUpdateContext = createContext({});
export const WannadoUpdateProvider = ({children}: ProviderProps) => {
  const updateWannadoTitle = (wannadoId: string, title: string) => {
    updateWannadoTitleDDD(wannadoId, title);
    WannadoUpdater.updateWannadoTitle(wannadoId, title);
  };

  return (
    <WannadoUpdateContext.Provider value={{}}>
      {children}
    </WannadoUpdateContext.Provider>
  );
};
