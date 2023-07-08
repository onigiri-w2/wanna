import {produce} from 'immer';
import {setRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {activeWannadoState} from '../states/activeWannado';
import {
  wannadoOrderState,
  wannadoOverviewAllState,
} from '../states/wannadoOverview';

export const wannadoActions = {
  updateTitle: (wannadoId: string, title: string) => {
    usecase.updateWannadoTitle(wannadoId, title);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        title,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.title = title;
      });
    });
  },
  complete: async (wannadoId: string) => {
    const wannado = await usecase.completeWannado(wannadoId);
    if (!wannado) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: true,
        completedAt: wannado.completedAt,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = true;
        target.completedAt = wannado.completedAt;
      });
    });
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: prev.order.filter(id => id !== wannadoId),
      };
    });
  },
  uncomplete: async (wannadoId: string) => {
    const wannado = await usecase.uncompleteWannado(wannadoId);
    if (!wannado) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: false,
        completedAt: wannado.completedAt,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = false;
        target.completedAt = wannado.completedAt;
      });
    });
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: [wannadoId, ...prev.order],
      };
    });
  },
};
