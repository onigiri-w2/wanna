import {
  updateWannadoTitle as updateWannadoTitleDDD,
  updateWannadoEmoji as updateWannadoEmojiDDD,
  completeWannado as completeWannadoDDD,
  uncompleteWannado as uncompleteWannadoDDD,
  createWannado as createWannadoDDD,
} from '@/domain/usecase/wannado';
import {WannadoUpdater} from '@/recoil/states/wannadoOverview/actions';

export const updateWannadoTitle = (wannadoId: string, title: string) => {
  updateWannadoTitleDDD(wannadoId, title);
  WannadoUpdater.updateWannadoTitle(wannadoId, title);
};

export const updateWannadoEmoji = (wannadoId: string, emoji: string) => {
  updateWannadoEmojiDDD(wannadoId, emoji);
  WannadoUpdater.updateWannadoEmoji(wannadoId, emoji);
};

export const completeWannado = (wannadoId: string) => {
  completeWannadoDDD(wannadoId);
  WannadoUpdater.completeWannado(wannadoId);
};

export const uncompleteWannado = (wannadoId: string) => {
  uncompleteWannadoDDD(wannadoId);
  WannadoUpdater.uncompleteWannado(wannadoId);
};

export const createWannado = async (title: string, emoji: string) => {
  const wannado = await createWannadoDDD(title, emoji);
  WannadoUpdater.createWannado(wannado);
};
