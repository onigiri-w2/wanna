import {createRealmContext} from '@realm/react';

import {Link} from './schema/link';
import {Memo} from './schema/memo';
import {Todo} from './schema/todo';
import {Wannado} from './schema/wannado';

const realmConfig = {
  schema: [Wannado, Todo, Memo, Link],
  schemaVersion: 1,
  // TODO: 本番環境では必ずfalseにする
  // というかconfigで環境別に設定できるようにしたいな
  deleteRealmIfMigrationNeeded: true,
};

export const RealmContext = createRealmContext(realmConfig);
