import {createContext, useContext} from 'react';

import {WannadoMemoryRepository} from '@/domain/repository/wannado';

export const WannadoRepositoryContext = createContext<WannadoMemoryRepository>(
  new WannadoMemoryRepository(),
);

export const WannadoRepositoryProvider = WannadoRepositoryContext.Provider;
export const useWannadoRepository = () => useContext(WannadoRepositoryContext);
