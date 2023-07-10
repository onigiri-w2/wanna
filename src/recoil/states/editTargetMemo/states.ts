import {atom, selector} from 'recoil';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {recoilKeyHashSet} from '@/recoil/recoilKeys';

import {activeWannadoMemosState} from '../activeWannado';

export const editTargetMemoIdState = atom<string>({
  key: recoilKeyHashSet.editTargetMemoId,
  default: '',
});

export const ediTaargetMemoState2 = selector<MemoSerialized | undefined>({
  key: recoilKeyHashSet.editTargetMemo2,
  get: ({get}) => {
    const editTargetMemoId = get(editTargetMemoIdState);
    const activeWannadoMemos = get(activeWannadoMemosState);
    return activeWannadoMemos.find(memo => memo.id === editTargetMemoId);
  },
});

export const editTargetMemoState = atom<MemoSerialized>({
  key: recoilKeyHashSet.editTargetMemo,
  default: undefined,
});

export const editMemoShowState = atom<boolean>({
  key: recoilKeyHashSet.editMemoShow,
  default: false,
});
