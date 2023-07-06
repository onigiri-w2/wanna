import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {BSON} from 'realm';

import {WannadoOrder as WannadoOrderEntity} from '@/domain/model/entity/wannadoOrder';

export class WannadoOrder extends Realm.Object<WannadoOrder> {
  _mongoId!: BSON.ObjectId;
  id!: string;
  order!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'WannadoOrder',
    primaryKey: 'id',
    properties: {
      _mongoId: {type: 'objectId', default: new BSON.ObjectId()},
      id: {type: 'string', indexed: true},
      order: 'string[]',
    },
  };
  public toEntity(): WannadoOrderEntity {
    return WannadoOrderEntity.deserialize({
      id: this.id,
      order: this.order,
    });
  }
}
