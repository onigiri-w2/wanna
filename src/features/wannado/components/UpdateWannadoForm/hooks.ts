import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {wannadoActions} from '@/recoil/actions/wannado';

export const useInput = (initialTtile: string, wannadoId: string) => {
  const [title, setTitle] = useState(initialTtile);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    setTitle(text);
    if (text === '') return;
    wannadoActions.updateTitle(wannadoId, text);
  };

  return {
    title,
    handleInputChange,
  };
};
