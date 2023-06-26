import {useCallback, useState, useEffect, useRef} from 'react';

import {Todo} from '@/domain/model/entity/todo';
import {Wannado} from '@/domain/model/entity/wannado';
import {CharId} from '@/domain/model/valueobjects/charId';
import {useWannadoRepository} from '@/providers/repository';

export const useTextInput = () => {
  const [value, setValue] = useState('');

  const updateValue = useCallback((text: string) => {
    setValue(text);
  }, []);
  return {
    value,
    updateValue,
  };
};

export const useTodoAddr = (wannadoId: CharId) => {
  const wannadoRef = useRef<Wannado | undefined>(undefined);
  const repo = useWannadoRepository();

  const addTodo = useCallback(
    (t: string) => {
      if (wannadoRef.current) {
        wannadoRef.current.addTodo(Todo.new(t));
        repo.update(wannadoRef.current as Wannado);
      }
    },
    [wannadoId],
  );

  const initialize = async () => {
    const wannado = await repo.find(wannadoId);
    wannadoRef.current = wannado;
  };

  useEffect(() => {
    initialize();
  }, [wannadoId]);

  return {
    addTodo,
  };
};
