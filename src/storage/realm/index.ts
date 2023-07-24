import {REALM_IF_MIGRATION_NEEDED, REALM_SCHEME_VERSION} from '@/utils/config';

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
  schemaVersion: REALM_SCHEME_VERSION || 0,
  deleteRealmIfMigrationNeeded: REALM_IF_MIGRATION_NEEDED,
};
