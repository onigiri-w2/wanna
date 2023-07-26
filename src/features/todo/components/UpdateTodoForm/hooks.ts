import {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';

export const useTextInput = (todo: TodoSerialized) => {
  const [value, setValue] = useState(todo.title);

  const handleChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    setValue(text);
    if (text === todo.title) return;
    if (text === '') return;

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
