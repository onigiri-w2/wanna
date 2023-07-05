import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {MemoListSerialized} from '@/domain/model/entity/memoList';

import {Memo} from './memo';

export class MemoList extends Realm.Object<MemoList> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  memos!: Realm.List<Memo>;
  order!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'MemoList',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      memos: 'Memo[]',
      order: 'string[]',
    },
  };
  public serialize(): MemoListSerialized {
    return {
      id: this.id,
      memos: this.memos.map(memo => memo.serialize()),
      order: this.order,
    };
  }
}
