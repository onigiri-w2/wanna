import {initializeRealm} from '@/storage/realm';
import {WannadoOrder as WannadoOrderRealm} from '@/storage/realm/schema/wannadoOrder';

import {WannadoOrder, CONST_ID} from '../model/entity/wannadoOrder';

// 現状、アプリに1つしか存在しないことを保証するために、idは内部で固定している
export class WannadoOrderRealmRepository {
  private readonly realm = initializeRealm();

  constructor() {
    this.initialize();
  }

  private async initialize() {
    const wannadoOrder = await this.one();
    if (!wannadoOrder) {
      this.create(WannadoOrder.new());
    }
  }

  private async create(wannadoOrder: WannadoOrder): Promise<void> {
    this.realm.write(() => {
      this.realm.create('WannadoOrder', wannadoOrder.serialize());
    });
  }
  public async update(wannadoOrder: WannadoOrder): Promise<void> {
    this.realm.write(() => {
      this.realm.create(
        'WannadoOrder',
        wannadoOrder.serialize(),
        Realm.UpdateMode.Modified,
      );
    });
  }

  public async one(): Promise<WannadoOrder | undefined> {
    const wannado = this.realm.objectForPrimaryKey<WannadoOrderRealm>(
      'WannadoOrder',
      CONST_ID,
    );
    return wannado?.toEntity();
  }
}
