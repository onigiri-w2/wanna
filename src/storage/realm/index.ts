import {Link} from './schema/link';
import {LinkList} from './schema/linkList';
import {Memo} from './schema/memo';
import {MemoList} from './schema/memoList';
import {Todo} from './schema/todo';
import {TodoList} from './schema/todoList';
import {Wannado} from './schema/wannado';
import {WannadoOrder} from './schema/wannadoOrder';

export const initializeRealm = () => {
  return new Realm(realmConfig);
};

const realmConfig = {
  schema: [
    WannadoOrder,
    Wannado,
    TodoList,
    Todo,
    MemoList,
    Memo,
    LinkList,
    Link,
  ],
  schemaVersion: 4,
  // TODO: 本番環境では必ずfalseにする
  // というかconfigで環境別に設定できるようにしたいな
  deleteRealmIfMigrationNeeded: true,
};
