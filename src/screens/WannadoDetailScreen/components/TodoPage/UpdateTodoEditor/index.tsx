import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from 'native-base';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {UpdateTodoForm} from '@/features/todo/components/UpdateTodoForm';

type Props = {
  isShow: boolean;
  onUpdateTitle: (todoId: string, title: string) => void;
  onTouchOutside: () => void;
  wannadoId: string;
  todo: TodoSerialized | undefined;
};
export const UpdateTodoEditor = ({
  isShow,
  onUpdateTitle,
  onTouchOutside,
  wannadoId,
  todo,
}: Props) => {
  return (
    <>
      {isShow && todo && (
        <>
          <Box style={styles.backLayer} onTouchStart={onTouchOutside} />
          <KeyboardAvoidingView style={styles.content}>
            <UpdateTodoForm
              onUpdateTitle={onUpdateTitle}
              todo={todo}
              wannadoId={wannadoId}
            />
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
