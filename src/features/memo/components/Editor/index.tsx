import React from 'react';

import {View, ScrollView} from 'native-base';
import {useRecoilValue} from 'recoil';

import * as usecase from '@/domain/usecase/memo';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';

import {EditorContent} from './EditorContent';
import {EditorTitle} from './EditorTitle';
import {EditToolBar} from './EditorToolBar';
import {useEditable, useActiveMemo, useRealtimeData} from './hooks';

type Props = {
  initialeMemoId: string | undefined;
  px?: number;
};
export const Editor = ({initialeMemoId, px = 1}: Props) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const {activeMemo, setActiveMemoId} = useActiveMemo(initialeMemoId);
  const {title, setTitle, content, setContent} = useRealtimeData(activeMemo);
  const {
    editable,
    focus,
    setEditableTitle,
    setEditableContent,
    setEditableFalse,
  } = useEditable();

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
        <EditorTitle
          isFocused={editable && focus === 'title'}
          title={title}
          editable={editable}
          onTouchView={setEditableTitle}
          onChangeTitle={setTitle}
          px={px}
        />
        <EditorContent
          content={content}
          editable={editable}
          onTouchView={setEditableContent}
          isFocused={editable && focus === 'content'}
          onChangeContent={setContent}
          px={px}
        />
      </ScrollView>
      <EditToolBar editable={editable} onPressDone={save} />
    </View>
  );
};
