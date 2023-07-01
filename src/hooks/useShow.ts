import {useCallback, useState} from 'react';

export const useShow = () => {
  const [isShow, setIsShow] = useState(false);

  const show = useCallback(() => setIsShow(true), []);
  const hide = useCallback(() => setIsShow(false), []);
  return {
    isShow,
    show,
    hide,
  };
};
