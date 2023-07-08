import {atom, selector} from 'recoil';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {WannadoOrderSerialized} from '@/domain/model/entity/wannadoOrder';
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

export const wannadoOverviewAllState = atom<WannadoSerialized[]>({
  key: 'wannadoOverviewAll',
  default: [],
  effects: [
    ({setSelf}) => {
      (async () => {
        const wannadoAll = await usecase.getWannadoAll();
        setSelf(wannadoAll);
      })();
    },
  ],
});

export const uncompWannadoOverviewAllState = selector({
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
        return {
          id: w.id,
          title: w.title,
          isCompleted: w.isCompleted,
          completedAt: w.completedAt,
        };
      })
      .filter(w => w !== undefined) as WannadoSerialized[];
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
    return filtered.map(w => ({
      id: w.id,
      title: w.title,
      isCompleted: w.isCompleted,
      completedAt: w.completedAt,
    }));
  },
});
