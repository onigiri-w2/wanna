import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {Text} from 'native-base';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {TodoCompletedList} from '@/features/todo/components/TodoCompletedList';
import {PAGE_BODY_PADDING} from '@/styles/const';

type Props = {
  todoList: TodoSerialized[];
  isShow: boolean;
  onClose: () => void;
};
export const TodoCompletedBottomSheet = ({
  todoList,
  isShow,
  onClose,
}: Props) => {
  return (
    <BottomSheetModal isShow={isShow} onClose={onClose}>
      <ScrollView contentContainerStyle={[styles.todolist]}>
        <Text fontSize={20} fontWeight="bold" ml={4} mb={2}>
          完了
        </Text>
        <TodoCompletedList todoList={todoList} />
      </ScrollView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  todolist: {
    padding: PAGE_BODY_PADDING,
    paddingBottom: 200,
  },
});
