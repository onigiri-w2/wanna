import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useResetRecoilState} from 'recoil';

import {activeWannadoState} from '@/recoil/states/activeWannado';

export const Goback = () => {
  const reset = useResetRecoilState(activeWannadoState);
  const navigation = useNavigation();

  const handlePressBack = () => {
    // 前ページに戻る時に、activeWannadoStateをリセットする
    // でないと次表示する時に、前のactiveWannadoStateが残っていてレンダリングコストがかかる
    reset();
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePressBack}>
      <SimpleLineIcons name="arrow-left" size={20} color="black" />
    </TouchableOpacity>
  );
};
