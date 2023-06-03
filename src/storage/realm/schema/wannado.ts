import 'react-native-get-random-values';
import {BSON} from 'realm';

import {Link} from './link';
import {Memo} from './memo';
import {Todo} from './todo';

export class Wannado extends Realm.Object<Wannado> {
  _id!: BSON.ObjectId;
  title!: string;
  emoji!: string;
  isCompleted!: boolean;
  createdAt!: Date;
  completedAt?: Date;
  todos!: Realm.List<Todo>;
  memos!: Realm.List<Memo>;
  links!: Realm.List<Link>;

  static schema: Realm.ObjectSchema = {
    name: 'Wannado',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', indexed: true, default: new BSON.ObjectId()},
      title: 'string',
      emoji: 'string',
      isCompleted: {type: 'bool', default: false},
      createdAt: 'date',
      completedAt: 'date?',
      todos: 'Todo[]',
      memos: 'Memo[]',
      links: 'Link[]',
    },
  };
}
