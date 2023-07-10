import {setRecoil} from 'recoil-nexus';

import {MemoSerialized} from '@/domain/model/entity/memo';

import {
  editMemoShowState,
  editTargetMemoState,
  editTargetMemoIdState,
} from './states';

export const editTargetMemoIdActions = {
  setEditTargetId: (memoId: string) => {
    setRecoil(editTargetMemoIdState, memoId);
  },
  resetTargetId: () => {
    setRecoil(editTargetMemoIdState, '');
  },
};

export const editTargetMemoActions = {
  setEditTarget: (memo: MemoSerialized) => {
    setRecoil(editTargetMemoState, memo);
  },
};

export const editMemoShowActions = {
  setShowTrue: () => {
    setRecoil(editMemoShowState, true);
  },
  setShowFalse: () => {
    setRecoil(editMemoShowState, false);
  },
};
