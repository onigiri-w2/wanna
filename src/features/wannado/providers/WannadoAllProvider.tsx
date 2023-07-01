import React, {createContext} from 'react';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {useWannadoAll} from '@/features/wannado/hooks/useWannadoAll';

type ContextProps = {
  wannadoList: WannadoSerialized[];
  notifyUpdated: () => void;
  updateWannadoEmoji: (wannadoId: string, emoji: string) => void;
  updateWannadoTitle: (wannadoId: string, title: string) => void;
  completeWannado: (wannadoId: string) => void;
  uncompleteWannado: (wannadoId: string) => void;
  deleteWannado: (wannadoId: string) => void;
};
type ProviderProps = {
  children: React.ReactNode;
};
export const WannadoAllContext = createContext<ContextProps>({
  wannadoList: [],
  notifyUpdated: () => {},
  updateWannadoEmoji: () => {},
  updateWannadoTitle: () => {},
  completeWannado: () => {},
  uncompleteWannado: () => {},
  deleteWannado: () => {},
});
export const WannadoAllProvider = ({children}: ProviderProps) => {
  const {
    wannadoList,
    notifyUpdated,
    updateWannadoEmoji,
    updateWannadoTitle,
    completeWannado,
    uncompleteWannado,
    deleteWannado,
  } = useWannadoAll();

  return (
    <WannadoAllContext.Provider
      value={{
        wannadoList,
        notifyUpdated,
        updateWannadoEmoji,
        updateWannadoTitle,
        completeWannado,
        uncompleteWannado,
        deleteWannado,
      }}>
      {children}
    </WannadoAllContext.Provider>
  );
};
export const useWannadoAllContext = () => React.useContext(WannadoAllContext);
