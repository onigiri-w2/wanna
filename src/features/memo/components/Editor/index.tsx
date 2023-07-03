import React from 'react';

import {View, ScrollView} from 'native-base';

import {activeWannadoActions} from '@/recoil/states/activeWannado';

import {EditorData} from './EditorData';
import {EditToolBar} from './EditorToolBar';
import {useEditable, useActiveMemo, useRealtimeData} from './hooks';

type Props = {
  initialeMemoId: string | undefined;
  px?: number;
};
export const Editor = ({initialeMemoId, px = 1}: Props) => {
  const {activeMemo} = useActiveMemo(initialeMemoId);
  const {title, content, data, setData} = useRealtimeData(activeMemo);
  const {editable, setEditableFalse, setEditableTrue} = useEditable();

  const save = async () => {
    if (title === '') return;

    setEditableFalse();
    if (!activeMemo) {
      activeWannadoActions.addMemo(title, content);
    } else {
      activeWannadoActions.updateMemoTitleAndContent(
        activeMemo.id,
        title,
        content,
      );
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
