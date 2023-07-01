import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from 'native-base';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {AddTodoForm} from '@/features/todo/components/AddTodoForm';

import {useAddEditorShowContext} from '../../providers/AddEditorShowProvider';

export const AddTodoEditor = () => {
  const {isModalVisible, hideModal} = useAddEditorShowContext();

  return (
    <>
      {isModalVisible && (
        <>
          <Box style={styles.backLayer} onTouchStart={hideModal} />
          <KeyboardAvoidingView style={styles.content}>
            <AddTodoForm />
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
