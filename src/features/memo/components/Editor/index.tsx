import React from 'react';

import {View, ScrollView} from 'native-base';
import {useRecoilValue} from 'recoil';

import * as usecase from '@/domain/usecase/memo';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';

import {EditorData} from './EditorData';
import {EditToolBar} from './EditorToolBar';
import {useEditable, useActiveMemo, useRealtimeData} from './hooks';

type Props = {
  initialeMemoId: string | undefined;
  px?: number;
};
export const Editor = ({initialeMemoId, px = 1}: Props) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const {activeMemo, setActiveMemoId} = useActiveMemo(initialeMemoId);
  const {title, content, data, setData} = useRealtimeData(activeMemo);
  const {editable, setEditableFalse, setEditableTrue} = useEditable();

  const save = async () => {
    if (title === '') return;

    setEditableFalse();
    if (!activeMemo) {
      const newMemo = await usecase.createMemo(wannadoId, title, content);
      if (newMemo) {
        setActiveMemoId(newMemo.id);
        activeWannadoActions.addMemo(newMemo);
      }
    } else {
      activeWannadoActions.updateMemoTitle(activeMemo.id, title);
      activeWannadoActions.updateMemoContent(activeMemo.id, content);
      usecase.updateMemoTitle(wannadoId, activeMemo.id, title);
      usecase.updateMemoContent(wannadoId, activeMemo.id, content);
    }
  };

  return (
    <View flex={1}>
      <ScrollView flex={1} px={px}>
        <EditorData
          data={data}
          title={title}
          content={content}
          px={px}
          editable={editable}
          onTouchView={setEditableTrue}
          onChangeContent={setData}
        />
      </ScrollView>
      <EditToolBar editable={editable} onPressDone={save} />
    </View>
  );
};
