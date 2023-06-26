import 'react-native-get-random-values';
import {BSON} from 'realm';

import {LinkSerialized} from '@/domain/model/entity/link';

export class Link extends Realm.Object<Link> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  title!: string;
  url!: string;
  createdAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Link',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      title: 'string',
      url: 'string',
      createdAt: 'date',
    },
  };

  public serialize(): LinkSerialized {
    return {
      id: this.id,
      title: this.title,
      url: this.url,
      createdAt: this.createdAt,
    };
  }
}
