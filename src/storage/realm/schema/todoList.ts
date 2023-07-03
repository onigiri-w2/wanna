import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {TodoListSerialized} from '@/domain/model/entity/todoLIst';

import {Todo} from './todo';

export class TodoList extends Realm.Object<TodoList> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  todos!: Realm.List<Todo>;
  uncompletedTodoOrder!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'TodoList',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      todos: 'Todo[]',
      uncompletedTodoOrder: 'string[]',
    },
  };
  public serialize(): TodoListSerialized {
    return {
      id: this.id,
      todos: this.todos.map(todo => todo.serialize()),
      uncompletedTodoOrder: this.uncompletedTodoOrder,
    };
  }
}
