import {Link} from './schema/link';
import {Memo} from './schema/memo';
import {Todo} from './schema/todo';
import {TodoList} from './schema/todoList';
import {Wannado} from './schema/wannado';

export const initializeRealm = () => {
  return new Realm(realmConfig);
};

const realmConfig = {
  schema: [Wannado, TodoList, Todo, Memo, Link],
  schemaVersion: 7,
  // TODO: 本番環境では必ずfalseにする
  // というかconfigで環境別に設定できるようにしたいな
  deleteRealmIfMigrationNeeded: true,
};
