import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {MemoSerialized} from '@/domain/model/entity/memo';

export class Memo extends Realm.Object<Memo> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  title!: string;
  content!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Memo',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      title: 'string',
      content: 'string',
      createdAt: 'date',
      updatedAt: 'date',
    },
  };

  public serialize(): MemoSerialized {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
