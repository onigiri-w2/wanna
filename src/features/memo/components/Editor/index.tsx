import React, {useCallback, useState} from 'react';

import {View} from 'native-base';
import {useRecoilValue} from 'recoil';

import * as memoUsecase from '@/domain/usecase/memo';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';
import {
  ediTaargetMemoState2,
  editTargetMemoIdActions,
} from '@/recoil/states/editTargetMemo';

import {EditorBody} from './EditorBody';
import {EditorToolBar} from './EditorToolBar';

type Props = {
  onBack: () => void;
};
export const Editor = ({onBack}: Props) => {
  const [isEditable, setIsEditable] = useState(false);
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const activeMemo = useRecoilValue(ediTaargetMemoState2);
  const [data, setData] = useState<string>(
    activeMemo ? `${activeMemo.title}\n${activeMemo.content}` : '',
  );
  const isNew = !activeMemo;
  const handlePressEdit = useCallback(() => {
    setIsEditable(!isEditable);
  }, [isEditable]);
  const handleTouchText = () => {
    setIsEditable(true);
  };
  const handleBack = () => {
    onBack();
  };

  const handleChangeText = async (text: string) => {
    setData(text);
    const title = text.split('\n')[0];
    const content = text.split('\n').slice(1).join('\n');
    if (!title) return;

    if (isNew) {
      const memo = await memoUsecase.createMemo(wannadoId, title, content);
      if (memo) {
        activeWannadoActions.addMemo(memo);
        editTargetMemoIdActions.setEditTargetId(memo.id);
      }
    } else {
      if (!activeMemo) return;
      activeWannadoActions.updateMemoTitleAndContent(
        activeMemo.id,
        title,
        content,
      );
    }
  };

  return (
    <View flex={1}>
      <EditorBody
        data={data}
        onChangeText={handleChangeText}
        isEditable={isEditable}
        onTouchText={handleTouchText}
      />
      <EditorToolBar
        onBack={handleBack}
        isEditable={isEditable}
        onPressEdit={handlePressEdit}
      />
    </View>
  );
};
