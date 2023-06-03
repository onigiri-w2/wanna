import 'react-native-get-random-values';
import {BSON} from 'realm';

export class Memo extends Realm.Object<Memo> {
  _id!: BSON.ObjectId;
  content!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Memo',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', indexed: true, default: new BSON.ObjectId()},
      content: 'string',
      createdAt: 'date',
      updatedAt: 'date',
    },
  };
}
