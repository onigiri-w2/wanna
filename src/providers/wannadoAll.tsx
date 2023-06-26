import React, {createContext} from 'react';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {useWannadoAll} from '@/features/wannado/hooks/useWannadoAll';

type ContextProps = {
  wannadoList: WannadoSerialized[];
  notifyReload: () => void;
};
type ProviderProps = {
  children: React.ReactNode;
};
export const WannadoAllContext = createContext<ContextProps>({
  wannadoList: [],
  notifyReload: () => {},
});
export const WannadoAllProvider = ({children}: ProviderProps) => {
  const {wannadoList, notifyReload} = useWannadoAll();

  return (
    <WannadoAllContext.Provider
      value={{
        wannadoList,
        notifyReload,
      }}>
      {children}
    </WannadoAllContext.Provider>
  );
};
export const useWannadoAllContext = () => React.useContext(WannadoAllContext);
