import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';
import {useRecoilValue, useResetRecoilState} from 'recoil';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {Editor} from '@/features/memo/components/Editor';
import {MemoList} from '@/features/memo/components/MemoList';
import {
  editMemoShowActions,
  editMemoShowState,
  editTargetMemoState,
} from '@/recoil/states/editTargetMemo';

import {Buttons} from './Buttons';

export const MemoPage = () => {
  const reset = useResetRecoilState(editTargetMemoState);
  const isEditMemoShow = useRecoilValue(editMemoShowState);
  const editTargetMemo = useRecoilValue(editTargetMemoState);

  const handleCloseModal = () => {
    editMemoShowActions.setShowFalse();
    reset();
  };

  const handlePressAddButton = () => {
    editMemoShowActions.setShowTrue();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <MemoList />
        <Buttons onPressAdd={handlePressAddButton} />
        <BottomSheetModal isShow={isEditMemoShow} onClose={handleCloseModal}>
          {isEditMemoShow && <Editor initialeMemoId={editTargetMemo?.id} />}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 16,
  },
});
