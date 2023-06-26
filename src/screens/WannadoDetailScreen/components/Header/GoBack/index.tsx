import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Goback = () => {
  const navigation = useNavigation();
  const handlePressBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handlePressBack}>
      <SimpleLineIcons name="arrow-left" size={20} color="black" />
    </TouchableOpacity>
  );
};
