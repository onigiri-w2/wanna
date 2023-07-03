import {setRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {wannadoOverviewAllState} from './states';

export const wannadoOverviewAllActions = {
  addWannado: async (title: string, emoji: string) => {
    const wannado = await usecase.createWannado(title, emoji);
    if (!wannado) return;
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return [...prev, wannado];
    });
  },
  deleteWannado: (wannadoId: string) => {
    // TODO: 削除失敗したらどうするか
    usecase.deleteWannado(wannadoId);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return prev.filter(w => w.id !== wannadoId);
    });
  },
};
