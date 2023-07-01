import {atom, selector} from 'recoil';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {getWannadoAll} from '@/domain/usecase/wannado';

export const wannadoOverviewAllState = atom<WannadoSerialized[]>({
  key: 'wannadoOverviewAll',
  default: selector({
    key: 'wannadoOverviewAll/default',
    get: async () => {
      return getWannadoAll();
    },
  }),
});

export const uncompWannadoOverviewAllState = selector({
  key: 'uncompWannadoOverviewAll',
  get: ({get}) => {
    const wannadoAll = get(wannadoOverviewAllState);
    const filtered = wannadoAll.filter(w => !w.isCompleted);
    return filtered.map(w => ({
      id: w.id,
      title: w.title,
      emoji: w.emoji,
      isCompleted: w.isCompleted,
      completedAt: w.completedAt,
    }));
  },
});

export const compWannadoOverviewAllState = selector({
  key: 'compWannadoOverviewAll',
  get: ({get}) => {
    const wannadoAll = get(wannadoOverviewAllState);
    const filtered = wannadoAll.filter(w => w.isCompleted);
    return filtered.map(w => ({
      id: w.id,
      title: w.title,
      emoji: w.emoji,
      isCompleted: w.isCompleted,
      completedAt: w.completedAt,
    }));
  },
});
