import React from 'react';
import {useState, createContext, useContext} from 'react';

import {Wannado} from '@/domain/entity/wannado';

type ProviderProps = {
  children: React.ReactNode;
};
type ContextValue = {
  wannaDoAll: Wannado[];
  addWannado: (wannado: Wannado) => void;
};

const VALUES = [
  Wannado.new('釣りに行く', '🐟'),
  Wannado.new('花火を見に行く', '🎇'),
  Wannado.new('フェスに行く', '👶'),
];

export const WannaDoAllContext = createContext<ContextValue>({
  wannaDoAll: [],
  addWannado: () => {},
});
export const WannaDoAllProvider = ({children}: ProviderProps) => {
  const [wannaDoAll, setWannadoAll] = useState(VALUES);
  const addWannado = (wannado: Wannado) => {
    setWannadoAll([...wannaDoAll, wannado]);
  };
  return (
    <WannaDoAllContext.Provider value={{wannaDoAll, addWannado}}>
      {children}
    </WannaDoAllContext.Provider>
  );
};
export const useWannadoAllContext = () => useContext(WannaDoAllContext);
