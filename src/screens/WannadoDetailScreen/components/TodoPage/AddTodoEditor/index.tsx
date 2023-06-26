import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from 'native-base';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {AddTodoForm} from '@/features/todo/components/AddTodoForm';

type Props = {
  isShow: boolean;
  addTodo: (title: string) => void;
  onTouchOutside: () => void;
};
export const AddTodoEditor = ({isShow, addTodo, onTouchOutside}: Props) => {
  return (
    <>
      {isShow && (
        <>
          <Box style={styles.backLayer} onTouchStart={onTouchOutside} />
          <KeyboardAvoidingView style={styles.content}>
            <AddTodoForm onAdd={addTodo} />
          </KeyboardAvoidingView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 101,
    backgroundColor: 'white',
  },
});
