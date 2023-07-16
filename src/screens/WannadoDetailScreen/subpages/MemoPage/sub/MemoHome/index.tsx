import React from 'react';
import {StyleSheet} from 'react-native';

import {View} from 'native-base';

import {MemoList} from '@/features/memo/components/MemoList';
import {editTargetMemoIdActions} from '@/recoil/states/editTargetMemo';

import {useNavigator} from '../../navigations/hooks/useNavigator';

import {Buttons} from './Buttons';

export const MemoHome = () => {
  const {navigateToMemoEditor} = useNavigator();
  const handlePressAddButton = () => {
    // TODO: 凝集度がやばい。散らばりすぎ。このロジックはfeaturesに置くべきな気がする...
    editTargetMemoIdActions.resetTargetId();
    navigateToMemoEditor();
  };
  return (
    <View style={styles.container}>
      <MemoList />
      <Buttons onPressAdd={handlePressAddButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 16,
  },
});
