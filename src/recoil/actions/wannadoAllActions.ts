import {setRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {
  wannadoOverviewAllState,
  wannadoOrderState,
} from '../states/wannadoOverview';

export const wannadoAllActions = {
  addWannado: async (title: string) => {
    const wannado = await usecase.createWannado(title);
    if (!wannado) return;
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return [
        ...prev,
        {
          id: wannado.id,
          title: wannado.title,
          isCompleted: wannado.isCompleted,
          completedAt: wannado.completedAt,
          completedTodoCount: wannado.todoList.todos.filter(t => t.isCompleted)
            .length,
          uncompletedTodoCount: wannado.todoList.todos.filter(
            t => !t.isCompleted,
          ).length,
          memoCount: wannado.memoList.memos.length,
          linkCount: wannado.linkList.links.length,
        },
      ];
    });
    // TODO: domain側との直行性が無いから、いずれ変更し忘れる可能性がある
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: [...prev.order, wannado.id],
      };
    });
  },
  setOrderWannado: (order: string[]) => {
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order,
      };
    });
  },
};
