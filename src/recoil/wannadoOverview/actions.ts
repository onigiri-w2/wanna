import {produce} from 'immer';
import {setRecoil} from 'recoil-nexus';

import {WannadoSerialized} from '@/domain/model/entity/wannado';

import {wannadoOverviewAllState} from './states';

export const wannadoOverviewAllActions = {
  addWannado: async (wannado: WannadoSerialized) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return [...prev, wannado];
    });
  },
  deleteWannado: (wannadoId: string) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return prev.filter(w => w.id !== wannadoId);
    });
  },
  updateWannadoTitle: (wannadoId: string, title: string) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.title = title;
      });
    });
  },
  updateWannadoEmoji: (wannadoId: string, emoji: string) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.emoji = emoji;
      });
    });
  },
  completeWannado: (wannadoId: string) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.isCompleted = true;
      });
    });
  },
  uncompleteWannado: (wannadoId: string) => {
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.isCompleted = false;
      });
    });
  },
};
