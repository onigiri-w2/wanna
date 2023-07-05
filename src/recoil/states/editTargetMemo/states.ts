import {atom} from 'recoil';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {recoilKeyHashSet} from '@/recoil/recoilKeys';

export const editTargetMemoState = atom<MemoSerialized>({
  key: recoilKeyHashSet.editTargetMemo,
  default: undefined,
});

export const editMemoShowState = atom<boolean>({
  key: recoilKeyHashSet.editMemoShow,
  default: false,
});
