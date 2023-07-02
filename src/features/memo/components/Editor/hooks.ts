import {useState, useMemo} from 'react';

import {useRecoilValue} from 'recoil';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {activeWannadoMemosState} from '@/recoil/states/activeWannado';

export const useEditable = () => {
  const [editable, setEditable] = useState(false);

  const setEditableFalse = () => {
    setEditable(false);
  };
  const setEditableTrue = () => {
    setEditable(true);
  };

  return {
    editable,
    setEditableFalse,
    setEditableTrue,
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
  const [data, setData] = useState<string>(
    activeMemo ? activeMemo.title + '\n' + activeMemo.content : '',
  );
  const title = useMemo(() => data.split('\n')[0], [data]);
  const content = useMemo(() => data.split('\n').slice(1).join('\n'), [data]);

  return {
    title,
    content,
    data,
    setData,
  };
};
