import React from 'react';
import {StyleSheet} from 'react-native';

import {View} from 'native-base';

import {MemoList} from '@/features/memo/components/MemoList';

import {useNavigator} from '../../navigations/hooks/useNavigator';

import {Buttons} from './Buttons';

export const MemoHome = () => {
  const {navigateToMemoEditor} = useNavigator();
  const handlePressAddButton = () => {
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
