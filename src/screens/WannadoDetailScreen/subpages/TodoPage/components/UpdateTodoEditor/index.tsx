import React from 'react';
import {StyleSheet} from 'react-native';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {UpdateTodoForm} from '@/features/todo/components/UpdateTodoForm';

import {useUpdateEditorShowContext} from '../../providers/UpdateEditorShowProvider';

type Props = {
  todo: TodoSerialized | undefined;
};
export const UpdateTodoEditor = ({todo}: Props) => {
  const {isModalVisible, hideModal} = useUpdateEditorShowContext();
  return (
    <>
      {isModalVisible && todo && (
        <>
          <KeyboardAvoidingView style={styles.content}>
            <UpdateTodoForm todo={todo} onClose={hideModal} />
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
