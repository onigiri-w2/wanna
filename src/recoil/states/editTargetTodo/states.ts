import {atom} from 'recoil';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {recoilKeyHashSet} from '@/recoil/recoilKeys';

export const editTargetTodoState = atom<TodoSerialized>({
  key: recoilKeyHashSet.editTargetTodo,
  default: undefined,
});

export const editTodoShowState = atom<boolean>({
  key: recoilKeyHashSet.editTodoShow,
  default: false,
});
