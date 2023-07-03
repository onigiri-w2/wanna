import {useCallback, useState} from 'react';

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
