import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {LinkListSerialized} from '@/domain/model/entity/linkList';

import {Link} from './link';

export class LinkList extends Realm.Object<LinkList> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  links!: Realm.List<Link>;
  order!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'LinkList',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      links: 'Link[]',
      order: 'string[]',
    },
  };
  public serialize(): LinkListSerialized {
    return {
      id: this.id,
      links: this.links.map(link => link.serialize()),
      order: this.order,
    };
  }
}
