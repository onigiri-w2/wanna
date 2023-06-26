import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {updateWannadoTitle, updateWannadoEmoji} from '@/domain/usecase/wannado';

export const useInput = (
  initialTtile: string,
  wannadoId: string,
  onChange?: (value: string) => void,
) => {
  const [title, setTitle] = useState(initialTtile);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    updateWannadoTitle(wannadoId, text);
    setTitle(text);
    onChange && onChange(text);
  };

  return {
    title,
    handleInputChange,
  };
};

export const useEmoji = (
  initialEmoji: string,
  wannadoId: string,
  onChange?: (value: string) => void,
) => {
  const [emoji, setEmoji] = useState(initialEmoji);

  const handleChangeEmoji = (emoji: string | null) => {
    const e = emoji ? emoji : '';
    updateWannadoEmoji(wannadoId, e);
    setEmoji(e);
    onChange && onChange(e);
  };

  return {
    emoji,
    handleChangeEmoji,
  };
};
