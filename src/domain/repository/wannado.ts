import {CharId} from '@/domain/model/valueobjects/charId';
import {initializeRealm} from '@/storage/realm';
import {Wannado as WannadoRealm} from '@/storage/realm/schema/wannado';

import {Wannado} from '../model/entity/wannado';

export class WannadoMemoryRepository {
  // javascriptではMapを使うときにkeyにオブジェクトを使うときは注意が必要
  // この場合はCharIdをstringに変換して使うべき
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_as_keys
  private readonly wannadoMap: Map<string, Wannado> = new Map();

  public async create(wannado: Wannado): Promise<void> {
    this.wannadoMap.set(wannado.id.id, wannado);
  }
  public async update(wannado: Wannado): Promise<void> {
    this.wannadoMap.set(wannado.id.id, wannado);
  }
  public async delete(id: CharId): Promise<void> {
    this.wannadoMap.delete(id.id);
  }
  public async find(id: CharId): Promise<Wannado | undefined> {
    return this.wannadoMap.get(id.id);
  }
  public async findAll(): Promise<Wannado[]> {
    return Array.from(this.wannadoMap.values());
  }
}

export class WannadoRealmRepository {
  private readonly realm = initializeRealm();

  public async create(wannado: Wannado): Promise<void> {
    this.realm.write(() => {
      this.realm.create('Wannado', wannado.serialize());
    });
  }
  public async update(wannado: Wannado): Promise<void> {
    this.realm.write(() => {
      this.realm.create(
        'Wannado',
        wannado.serialize(),
        Realm.UpdateMode.Modified,
      );
    });
  }

  public async delete(id: CharId): Promise<void> {
    const wannado = this.realm.objectForPrimaryKey<WannadoRealm>(
      'Wannado',
      id.id,
    );
    const todos = wannado?.todos;
    const memos = wannado?.memos;
    const links = wannado?.links;
    this.realm.write(() => {
      this.realm.delete(todos);
      this.realm.delete(memos);
      this.realm.delete(links);
      this.realm.delete(wannado);
    });
  }

  public async find(id: CharId): Promise<Wannado | undefined> {
    const wannado = this.realm.objectForPrimaryKey<WannadoRealm>(
      'Wannado',
      id.id,
    );
    return wannado?.toEntity();
  }

  public async findAll(): Promise<Wannado[]> {
    const wannados = this.realm.objects<WannadoRealm>('Wannado');
    return wannados.map(wannado => wannado.toEntity());
  }
}
