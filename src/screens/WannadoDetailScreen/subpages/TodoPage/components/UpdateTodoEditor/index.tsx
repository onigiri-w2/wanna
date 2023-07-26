import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useRecoilValue} from 'recoil';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {UpdateTodoForm} from '@/features/todo/components/UpdateTodoForm';
import {
  editTargetTodoState,
  editTodoShowActions,
  editTodoShowState,
} from '@/recoil/states/editTargetTodo';

export const UpdateTodoEditor = React.memo(() => {
  const todo = useRecoilValue<TodoSerialized | null>(editTargetTodoState);
  const isEditShow = useRecoilValue(editTodoShowState);
  const handleClose = () => {
    editTodoShowActions.setShowFalse();
  };
  return (
    <>
      {isEditShow && todo && (
        <>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.content}>
              <UpdateTodoForm todo={todo} onClose={handleClose} />
            </View>
          </KeyboardAvoidingView>
        </>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  backLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  keyboard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 101,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
    paddingRight: 12,
  },
});
