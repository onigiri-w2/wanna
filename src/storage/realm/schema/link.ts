import 'react-native-get-random-values';
import {BSON} from 'realm';

export class Link extends Realm.Object<Link> {
  _id!: BSON.ObjectId;
  title!: string;
  url!: string;
  createdAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Link',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', indexed: true, default: new BSON.ObjectId()},
      title: 'string',
      url: 'string',
      createdAt: 'date',
    },
  };
}
