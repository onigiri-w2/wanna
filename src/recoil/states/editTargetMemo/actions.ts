import {setRecoil} from 'recoil-nexus';

import {MemoSerialized} from '@/domain/model/entity/memo';

import {editMemoShowState, editTargetMemoState} from './states';

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
