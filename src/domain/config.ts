import {WannadoRealmRepository} from './repository/wannado';
import {WannadoOrderRealmRepository} from './repository/wannadoOrder';

// TODO: Repositoryをこういう風にシングルトンで管理するのは適切だろうか
// まあエラー出たら考えるか...
export const repoWannado = new WannadoRealmRepository();
export const repoWannadoOrder = new WannadoOrderRealmRepository();
