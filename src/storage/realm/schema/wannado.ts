import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {Wannado as WannadoEntity} from '@/domain/model/entity/wannado';

import {Link} from './link';
import {MemoList} from './memoList';
import {TodoList} from './todoList';

export class Wannado extends Realm.Object<Wannado> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  title!: string;
  emoji!: string;
  isCompleted!: boolean;
  createdAt!: Date;
  completedAt?: Date;
  todoList!: TodoList;
  memoList!: MemoList;
  links!: Realm.List<Link>;
  linkOrder!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'Wannado',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      title: 'string',
      emoji: 'string',
      isCompleted: {type: 'bool', default: false},
      createdAt: 'date',
      completedAt: 'date?',
      todoList: 'TodoList',
      memoList: 'MemoList',
      links: 'Link[]',
      linkOrder: 'string[]',
    },
  };

  public toEntity(): WannadoEntity {
    return WannadoEntity.deserialize({
      id: this.id,
      title: this.title,
      emoji: this.emoji,
      isCompleted: this.isCompleted,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      todoList: this.todoList.serialize(),
      memoList: this.memoList.serialize(),
      links: this.links.map(link => link.serialize()),
      linkOrder: this.linkOrder,
    });
  }
}
