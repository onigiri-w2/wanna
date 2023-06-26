import {useState, useCallback} from 'react';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {getWannado} from '@/domain/usecase/wannado';

export const useActiveWannado = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wannado, setWannado] = useState<WannadoSerialized>();

  const loadData = useCallback(async (wannadoId: string) => {
    const wannado = await getWannado(wannadoId);
    if (wannado) {
      setWannado(wannado);
      setIsLoading(false);
    }
  }, []);

  return {
    wannado,
    isLoading,
    loadData,
  };
};
