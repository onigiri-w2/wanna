import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import * as usecase from '@/domain/usecase/wannado';
import {wannadoActions} from '@/recoil/actions/wannado';

export const useInput = (initialTtile: string, wannadoId: string) => {
  const [title, setTitle] = useState(initialTtile);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = e.nativeEvent.text;
    setTitle(text);
    if (text === '') return;
    usecase.updateWannadoTitle(wannadoId, text);
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
    setEmoji(e);
    if (e === '') return;

    usecase.updateWannadoEmoji(wannadoId, e);
    wannadoActions.updateEmoji(wannadoId, e);
  };

  return {
    emoji,
    handleChangeEmoji,
  };
};
