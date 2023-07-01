import React from 'react';
import {ScrollView} from 'react-native';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View, VStack} from 'native-base';
import {useRecoilValue} from 'recoil';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {MemoSerialized} from '@/domain/model/entity/memo';
import {Editor} from '@/features/memo/components/Simple/Editor';
import {MemoItem} from '@/features/memo/components/Simple/MemoItem';
import {useMemoAll} from '@/features/memo/hooks/useMemoAll';
import {activeWannadoState} from '@/recoil/states/activeWannado';

import {Buttons} from './Buttons';

export const MemoPage = () => {
  const wannado = useRecoilValue(activeWannadoState);
  const {memoList, updateTitle, updateContent, deleteMemo, getMemo, addMemo} =
    useMemoAll(wannado ? wannado.id : '', wannado ? wannado?.memos : []);
  const [activeMemo, setActiveMemo] = React.useState<MemoSerialized>();
  const [isShow, setIsShow] = React.useState(false);

  const handlePressDelete = (memoId: string) => {
    deleteMemo(memoId);
  };
  const handlePressEdit = (memoId: string) => {
    setActiveMemo(getMemo(memoId));
    setIsShow(true);
  };
  const saveMemo = async (title: string, content: string) => {
    if (!activeMemo) {
      const memo = await addMemo(title, content);
      setActiveMemo(memo);
    } else {
      updateTitle(activeMemo.id, title);
      updateContent(activeMemo.id, content);
    }
  };

  return (
    <BottomSheetModalProvider>
      <View
        flex={1}
        style={{
          position: 'relative',
        }}>
        <ScrollView>
          <VStack px={4} pt={3} space={4}>
            {memoList.map(memo => {
              return (
                <MemoItem
                  key={memo.id}
                  memo={memo}
                  onPressDelete={handlePressDelete}
                  onPressEdit={handlePressEdit}
                />
              );
            })}
          </VStack>
        </ScrollView>
        <Buttons
          onPressAdd={() => {
            setIsShow(true);
            console.log('add');
          }}
        />
        <BottomSheetModal
          isShow={isShow}
          onClose={() => {
            setIsShow(false);
            setActiveMemo(undefined);
          }}>
          <Editor memo={activeMemo} onSave={saveMemo} />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};
