import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import {updateWannadoTitle, updateWannadoEmoji} from '@/domain/usecase/wannado';
import {wannadoActions} from '@/recoil/actions/wannado';

export const useInput = (initialTtile: string, wannadoId: string) => {
  const [title, setTitle] = useState(initialTtile);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    updateWannadoTitle(wannadoId, text);
    setTitle(text);
    wannadoActions.updateTitle(wannadoId, text);
  };

  return {
    title,
    handleInputChange,
  };
};

export const useEmoji = (initialEmoji: string, wannadoId: string) => {
  const [emoji, setEmoji] = useState(initialEmoji);

  const handleChangeEmoji = (emoji: string | null) => {
    const e = emoji ? emoji : '';
    updateWannadoEmoji(wannadoId, e);
    setEmoji(e);
    wannadoActions.updateEmoji(wannadoId, e);
  };

  return {
    emoji,
    handleChangeEmoji,
  };
};
