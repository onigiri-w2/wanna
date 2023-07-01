import {useState, useMemo} from 'react';

import {useRecoilValue} from 'recoil';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {activeWannadoMemosState} from '@/recoil/states/activeWannado';

export const useEditable = () => {
  const [focus, setFocus] = useState<'title' | 'content'>('title');
  const [editable, setEditable] = useState(false);

  const setEditableTitle = () => {
    setFocus('title');
    setEditable(true);
  };
  const setEditableContent = () => {
    setFocus('content');
    setEditable(true);
  };
  const setEditableFalse = () => {
    setEditable(false);
  };

  return {
    focus,
    editable,
    setEditableTitle,
    setEditableContent,
    setEditableFalse,
  };
};

export const useActiveMemo = (initialMemoId: string | undefined) => {
  const [activeMemoId, setActiveMemoId] = useState(initialMemoId);
  const memos = useRecoilValue(activeWannadoMemosState);
  const activeMemo = useMemo(
    () => memos.find(memo => memo.id === activeMemoId),
    [activeMemoId, memos],
  );

  return {
    activeMemoId,
    setActiveMemoId,
    activeMemo,
  };
};

export const useRealtimeData = (activeMemo: MemoSerialized | undefined) => {
  const [title, setTitle] = useState(activeMemo ? activeMemo.title : '');
  const [content, setContent] = useState(activeMemo ? activeMemo.content : '');

  return {
    title,
    setTitle,
    content,
    setContent,
  };
};
