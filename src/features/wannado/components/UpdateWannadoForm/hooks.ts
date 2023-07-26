import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';

export const useInput = (initialTtile: string, wannadoId: string) => {
  const [title, setTitle] = useState(initialTtile);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    setTitle(text);
    if (text === '') return;
    activeWannadoActions.updateWannadoTitle(text);
  };

  return {
    title,
    handleInputChange,
  };
};
