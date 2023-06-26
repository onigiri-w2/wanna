import {createContext, useEffect, useState, useContext} from 'react';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {getWannado} from '@/domain/usecase/wannado';

type ProviderProps = {
  wannadoId: string;
  children: React.ReactNode;
};
type ContextProps = {
  wannado?: WannadoSerialized;
  isLoading: boolean;
};
export const ActiveWannadoContext = createContext<ContextProps>({
  wannado: undefined,
  isLoading: true,
});
export const ActiveWannadoProvider = ({wannadoId, children}: ProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wannado, setWannado] = useState<WannadoSerialized | undefined>();

  const loadData = async () => {
    const wannado = await getWannado(wannadoId);
    if (wannado) {
      setWannado(wannado);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [wannadoId]);

  return (
    <ActiveWannadoContext.Provider
      value={{
        wannado,
        isLoading,
      }}>
      {!isLoading && wannado && children}
    </ActiveWannadoContext.Provider>
  );
};
export const useActiveWannadoContext = () => useContext(ActiveWannadoContext);
