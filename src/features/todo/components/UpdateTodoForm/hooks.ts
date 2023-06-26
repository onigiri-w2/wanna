import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export const useTextInput = (initialText: string) => {
  const [value, setValue] = useState(initialText);

  const handleChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setValue(e.nativeEvent.text);
  };

  return {
    value,
    handleChangeText,
  };
};
