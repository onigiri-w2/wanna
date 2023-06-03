import 'react-native-get-random-values';
import {BSON} from 'realm';

export class Todo extends Realm.Object<Todo> {
  _id!: BSON.ObjectId;
  title!: string;
  isCompleted: boolean = false;
  createdAt!: Date;
  completedAt?: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Todo',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', indexed: true, default: new BSON.ObjectId()},
      title: 'string',
      isCompleted: {type: 'bool', default: false},
      createdAt: 'date',
      completedAt: 'date?',
    },
  };
}
