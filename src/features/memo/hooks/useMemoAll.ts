import {useEffect, useState} from 'react';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {
  updateMemoTitle,
  updateMemoContent,
  deleteMemo as deleteMemoDDD,
  createMemo,
} from '@/domain/usecase/memo';

export const useMemoAll = (
  wannadoId: string,
  initialMemoList: MemoSerialized[],
) => {
  const [memoList, setMemoList] = useState<MemoSerialized[]>(initialMemoList);

  const addMemo = async (title: string, content: string) => {
    const memo = await createMemo(wannadoId, title, content);
    if (memo) {
      setMemoList(prevMemoList => [...prevMemoList, memo]);
      return memo;
    }
  };

  const updateTitle = (memoId: string, title: string) => {
    setMemoList(prevMemoList =>
      prevMemoList.map(memo => {
        if (memo.id === memoId) {
          return {
            ...memo,
            title,
          };
        }
        return memo;
      }),
    );
    updateMemoTitle(wannadoId, memoId, title);
  };

  const updateContent = (memoId: string, content: string) => {
    setMemoList(prevMemoList =>
      prevMemoList.map(memo => {
        if (memo.id === memoId) {
          return {
            ...memo,
            content,
          };
        }
        return memo;
      }),
    );
    updateMemoContent(wannadoId, memoId, content);
  };

  const deleteMemo = (memoId: string) => {
    setMemoList(prevMemoList =>
      prevMemoList.filter(memo => memo.id !== memoId),
    );
    deleteMemoDDD(wannadoId, memoId);
  };

  const getMemo = (memoId: string) => {
    return memoList.find(memo => memo.id === memoId);
  };

  useEffect(() => {
    setMemoList(initialMemoList);
  }, [initialMemoList]);

  return {
    memoList,
    updateTitle,
    updateContent,
    deleteMemo,
    getMemo,
    addMemo,
  };
};
