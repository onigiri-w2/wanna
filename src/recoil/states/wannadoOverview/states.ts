import {atom, selector} from 'recoil';

import {WannadoOrderSerialized} from '@/domain/model/entity/wannadoOrder';
import {WannadoOverview} from '@/domain/types';
import * as usecase from '@/domain/usecase/wannado';

export const wannadoOrderState = atom<WannadoOrderSerialized>({
  key: 'wannadoOverview',
  default: undefined,
  effects: [
    ({setSelf}) => {
      (async () => {
        const wannadoOverview = await usecase.getWannadoOrder();
        setSelf(wannadoOverview);
      })();
    },
  ],
});

export const wannadoOverviewAllState = atom<WannadoOverview[]>({
  key: 'wannadoOverviewAll',
  default: [],
  effects: [
    ({setSelf}) => {
      (async () => {
        const wannadoAll = await usecase.getWannadoAll();
        const data = wannadoAll.map(w => ({
          id: w.id,
          title: w.title,
          isCompleted: w.isCompleted,
          completedAt: w.completedAt,
          completedTodoCount: w.todoList.todos.filter(t => t.isCompleted)
            .length,
          uncompletedTodoCount: w.todoList.todos.filter(t => !t.isCompleted)
            .length,
          memoCount: w.memoList.memos.length,
          linkCount: w.linkList.links.length,
        }));
        setSelf(data);
      })();
    },
  ],
});

export const uncompWannadoOverviewAllState = selector<WannadoOverview[]>({
  key: 'uncompWannadoOverviewAll',
  get: ({get}) => {
    const wannadoOrder = get(wannadoOrderState);
    if (!wannadoOrder) return [];

    const wannadoAll = get(wannadoOverviewAllState);
    const filtered = wannadoAll
      .filter(w => !w.isCompleted)
      .filter(w => {
        return wannadoOrder.order.includes(w.id);
      });
    return wannadoOrder.order
      .map(id => {
        const w = filtered.find(w => w.id === id);
        if (!w) return undefined;
        return w;
      })
      .filter(w => w !== undefined) as WannadoOverview[];
  },
});

export const compWannadoOverviewAllState = selector({
  key: 'compWannadoOverviewAll',
  get: ({get}) => {
    const wannadoAll = get(wannadoOverviewAllState);
    const filtered = wannadoAll
      .filter(w => w.isCompleted)
      .sort((a, b) => {
        if (a.completedAt && b.completedAt) {
          return a.completedAt.getTime() - b.completedAt.getTime();
        }
        return 0;
      });
    return filtered;
  },
});
