import {useCallback, useState} from 'react';

export const useEmoji = () => {
  const [emoji, setEmoji] = useState('');

  const updateEmoji = useCallback((emoji: string | null) => {
    setEmoji(emoji ? emoji : '');
  }, []);
  return {
    emoji,
    updateEmoji,
  };
};
