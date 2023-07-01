import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  const handleUpdate = () => {
    navigation.goBack();
  };

  return {
    handleUpdate,
  };
};
