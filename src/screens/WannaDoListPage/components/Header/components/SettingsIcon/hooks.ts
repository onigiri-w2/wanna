import {useState} from 'react';

import {useNavigation, NavigationProp} from '@react-navigation/native';

import {RootNavParamList} from '@/navigations';

export const useSettingIcon = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation<NavigationProp<RootNavParamList>>();

  function handlePress() {
    setIsPressed(!isPressed);
    navigation.navigate('SettingsPage');
  }
  return {
    isPressed,
    handlePress,
  };
};
