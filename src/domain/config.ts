import {
  WannadoMemoryRepository,
  WannadoRealmRepository,
} from './repository/wannado';

// TODO: Repositoryをこういう風にシングルトンで管理するのは適切だろうか
// まあエラー出たら考えるか...
export const repo2 = new WannadoMemoryRepository();
export const repo = new WannadoRealmRepository();
