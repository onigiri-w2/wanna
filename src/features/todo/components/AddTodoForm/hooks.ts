import {useCallback, useState} from 'react';

import * as usecase from '@/domain/usecase/todo';
import {activeWannadoActions} from '@/recoil/states/activeWannado';

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

export const useTodoAddr = (wannadoId: string) => {
  const addTodo = useCallback(
    async (t: string) => {
      const todo = await usecase.createTodo(wannadoId, t);
      if (todo) activeWannadoActions.addTodo(todo);
    },
    [wannadoId],
  );

  return {
    addTodo,
  };
};
