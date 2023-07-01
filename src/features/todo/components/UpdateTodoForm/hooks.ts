import {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {useRecoilValue} from 'recoil';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {updateTodoTitle} from '@/domain/usecase/todo';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';

export const useTextInput = (todo: TodoSerialized) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const [value, setValue] = useState(todo.title);

  const handleChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    setValue(text);
    if (text === todo.title) return;
    if (text === '') return;

    updateTodoTitle(wannadoId, todo.id, text);
    activeWannadoActions.updateTodoTitle(todo.id, text);
  };

  useEffect(() => {
    setValue(todo.title);
  }, [todo.title]);

  return {
    value,
    handleChangeText,
  };
};
