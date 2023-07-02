import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {TodoSerialized} from '@/domain/model/entity/todo';

export class Todo extends Realm.Object<Todo> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  title!: string;
  isCompleted: boolean = false;
  createdAt!: Date;
  completedAt?: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Todo',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      title: 'string',
      isCompleted: {type: 'bool', default: false},
      createdAt: 'date',
      completedAt: 'date?',
    },
  };
  public serialize(): TodoSerialized {
    return {
      id: this.id,
      title: this.title,
      isCompleted: this.isCompleted,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
    };
  }
}
