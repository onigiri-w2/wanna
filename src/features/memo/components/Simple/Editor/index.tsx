import React, {useState} from 'react';

import {View, ScrollView} from 'native-base';

import {MemoSerialized} from '@/domain/model/entity/memo';

import {EditorContent} from './EditorContent';
import {EditorTitle} from './EditorTitle';
import {EditToolBar} from './EditorToolBar';

// TODO: onSaveを外から貰う必要があるのか？
// TODO: 新規作成か編集かを判別する必要があるかも？
type Props = {
  memo?: MemoSerialized;
  onSave: (title: string, content: string) => void;
  px?: number;
};
export const Editor = ({memo, onSave, px = 0}: Props) => {
  const [editable, setEditable] = useState(false);
  const [focus, setFocus] = useState<'title' | 'content'>('title');
  const [title, setTitle] = useState(memo ? memo.title : '');
  const [content, setContent] = useState(memo ? memo.content : '');

  const handleTouchTitle = () => {
    setFocus('title');
    setEditable(true);
  };
  const handleTouchContent = () => {
    setFocus('content');
    setEditable(true);
  };
  const handlePressDone = () => {
    setEditable(false);
    onSave(title, content);
  };

  return (
    <View flex={1}>
      <ScrollView flex={1} px={px}>
        <EditorTitle
          isFocused={editable && focus === 'title'}
          title={title}
          editable={editable}
          onTouchView={handleTouchTitle}
          onChangeTitle={setTitle}
        />
        <EditorContent
          content={content}
          editable={editable}
          onTouchView={handleTouchContent}
          isFocused={editable && focus === 'content'}
          onChangeContent={setContent}
        />
      </ScrollView>
      <EditToolBar editable={editable} onPressDone={handlePressDone} />
    </View>
  );
};
