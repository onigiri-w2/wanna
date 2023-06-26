import {useCallback, useEffect, useRef, useState} from 'react';

import {Wannado} from '@/domain/model/entity/wannado';
import {CharId} from '@/domain/model/valueobjects/charId';
import {useWannadoRepository} from '@/providers/repository';

export const useUpdateWannado = (wannadoId: CharId) => {
  const wannadoRef = useRef<Wannado | undefined>(undefined);
  const [isCompleted, setIsCompleted] = useState(false);
  const repo = useWannadoRepository();

  const deleteWanando = useCallback(() => {
    repo.delete(wannadoId);
  }, [wannadoId]);
  const completeWannado = useCallback(() => {
    const w = wannadoRef.current;
    if (w) {
      w.complete();
      repo.update(w);
    }
  }, [wannadoId]);
  const uncompleteWannado = useCallback(() => {
    const w = wannadoRef.current;
    if (w) {
      w.uncomplete();
      repo.update(w);
    }
  }, [wannadoId]);

  const initialize = async () => {
    const wannado = await repo.find(wannadoId);
    if (wannado) {
      wannadoRef.current = wannado;
      setIsCompleted(wannado.isCompleted);
    }
  };

  useEffect(() => {
    initialize();
  }, [wannadoId]);

  return {
    isCompleted,
    deleteWanando,
    completeWannado,
    uncompleteWannado,
  };
};
