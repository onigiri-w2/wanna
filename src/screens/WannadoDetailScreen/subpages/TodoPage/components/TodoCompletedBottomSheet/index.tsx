import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, View} from 'native-base';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {TodoCompletedList} from '@/features/todo/components/TodoCompletedList';
import {PAGE_BODY_PADDING} from '@/styles/const';

import {useCompletedShowContext} from '../../providers/CompletedShowProvider';

export const TodoCompletedBottomSheet = () => {
  const {isModalVisible, hideModal} = useCompletedShowContext();
  return (
    <BottomSheetModal isShow={isModalVisible} onClose={hideModal}>
      <View style={[styles.todolist]}>
        <Text fontSize={20} fontWeight="bold" ml={4} mb={2}>
          完了
        </Text>
        <TodoCompletedList />
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  todolist: {
    padding: PAGE_BODY_PADDING,
    paddingBottom: 0,
  },
});
