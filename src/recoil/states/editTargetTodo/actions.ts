import {setRecoil} from 'recoil-nexus';

import {TodoSerialized} from '@/domain/model/entity/todo';

import {editTargetTodoState, editTodoShowState} from './states';

export const editTargetTodoActions = {
  setEditTarget: (todo: TodoSerialized) => {
    setRecoil(editTargetTodoState, todo);
  },
};

export const editTodoShowActions = {
  setShowTrue: () => {
    setRecoil(editTodoShowState, true);
  },
  setShowFalse: () => {
    setRecoil(editTodoShowState, false);
  },
};
