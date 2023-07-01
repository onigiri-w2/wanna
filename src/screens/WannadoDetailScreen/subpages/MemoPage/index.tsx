import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {Editor} from '@/features/memo/components/Editor';
import {MemoList} from '@/features/memo/components/MemoList';
import {useShow} from '@/hooks/useShow';

import {Buttons} from './Buttons';

export const MemoPage = () => {
  const {isShow, show, hide} = useShow();
  const [activeMemoId, setActiveMemoId] = React.useState<string | undefined>();

  const handlePressEdit = (memoId: string) => {
    show();
    setActiveMemoId(memoId);
  };

  const handleCloseModal = () => {
    hide();
    setActiveMemoId(undefined);
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <MemoList onPressMemo={handlePressEdit} />
        <Buttons onPressAdd={show} />
        <BottomSheetModal isShow={isShow} onClose={handleCloseModal}>
          {isShow && <Editor initialeMemoId={activeMemoId} />}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 16,
    paddingBottom: 0,
  },
});
