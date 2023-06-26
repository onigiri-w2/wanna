import {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {useWannadoAllContext} from '@/providers/wannadoAll';

export const useTitle = (initialTitle: string) => {
  const {notifyReload} = useWannadoAllContext();
  const [title, setTitle] = useState<string>(initialTitle);

  const handleChangeTitle = (t: string) => {
    notifyReload();
    setTitle(t);
  };

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  return {
    title,
    handleChangeTitle,
  };
};

export const useEmoji = (initialEmoji: string) => {
  const {notifyReload} = useWannadoAllContext();
  const [emoji, setEmoji] = useState<string>(initialEmoji);

  const handleChangeEmoji = (e: string) => {
    notifyReload();
    setEmoji(e);
  };

  useEffect(() => {
    setEmoji(initialEmoji);
  }, [initialEmoji]);

  return {
    emoji,
    handleChangeEmoji,
  };
};

export const useShow = () => {
  const [isShowEditor, setIsShowEditor] = useState(false);
  const [isShowUpdator, setIsShowUpdator] = useState(false);

  const handelPressTitle = () => {
    setIsShowEditor(!isShowEditor);
    setIsShowUpdator(false);
  };
  const handlePressMenu = () => {
    setIsShowUpdator(!isShowUpdator);
    setIsShowEditor(false);
  };

  return {
    isShowEditor,
    isShowUpdator,
    handelPressTitle,
    handlePressMenu,
  };
};

export const useWannadoUpdate = () => {
  const {notifyReload} = useWannadoAllContext();
  const navigation = useNavigation();

  const handleUpdate = () => {
    notifyReload();
    navigation.goBack();
  };

  return {
    handleUpdate,
  };
};
