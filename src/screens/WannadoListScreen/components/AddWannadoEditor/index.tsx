import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from 'native-base';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {AddWannadoForm} from '@/features/wannado/components/AddWannadoForm';

import {useAddEditorShowContext} from '../../providers/AddEditorShowProvider';

// TODO: AddTodoEditorのコンポーネントと共通化できることあるかも。もし検討次第で可能なら共通部分を抜き出す。
export const AddWannadoEditor = () => {
  const {isModalVisible, hideModal} = useAddEditorShowContext();

  return (
    <>
      {isModalVisible && (
        <>
          <Box style={styles.backLayer} onTouchStart={hideModal} />
          <KeyboardAvoidingView style={styles.content}>
            <AddWannadoForm />
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
