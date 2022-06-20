import { injectable, autoInjectable } from 'tsyringe';
import { DeepPartial, EntityRepository, FindOptionsWhere, Repository, getManager } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
// import { AppDataSource } from '../data-source';
import Permissions from '../entity/Permissions.entity';

@autoInjectable()
@EntityRepository(Permissions)
export default class PermissionRepository {
  private ormRepository: Repository<any>;
  constructor() {
    // this.ormRepository = AppDataSource.manager.getRepository(Permissions);
    // this.ormRepository = getManager().getRepository(Permissions);
  }
  getRepository() {
    return getManager().getRepository(Permissions);
  }

  async getPermissionByRole<T>(queryOption: FindOptionsWhere<T>): Promise<any> {
    return this.getRepository().find({
      where: queryOption
    });
  }
  async get<T>(queryOption?: FindOptionsWhere<T>): Promise<any> {
    return this.getRepository().find({
      where: queryOption
    })
  }
  async create<T>(partialEntity: DeepPartial<any>): Promise<any> {
    return this.getRepository().save(partialEntity);
  }
  async update<T>(partialEntity: QueryDeepPartialEntity<T>, queryOption: FindOptionsWhere<T>): Promise<any> {
    return this.getRepository().update(queryOption, partialEntity);
  }
  async delete<T>(queryOption: FindOptionsWhere<T>): Promise<any> {
    return this.getRepository().delete(queryOption);
  }
  public async findAllById(permissionIds: any[]): Promise<any[]> {
    const permissions = await this.getRepository().findByIds(permissionIds);
    return permissions;
  }
  public async findByName(name: string): Promise<Permissions | undefined> {
    const findProduct = await this.getRepository().findOne({
      where: {
        name,
      },
    });
    return findProduct;
  }
}