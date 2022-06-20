import { injectable, autoInjectable } from 'tsyringe';
import { DeepPartial, EntityRepository, FindOptionsWhere, Repository, getManager } from 'typeorm';

import Roles from '../entity/Roles.entity';

import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
// import Permissions from '../entity/Permissions';
import { AppDataSource } from '../data-source';
import { UserRoleTypes } from '../enums/user-roles.enum';

@autoInjectable()
@EntityRepository(Roles)
export default class RoleRepository {
  private ormRepository: Repository<any>;
  constructor() {
    // this.ormRepository = AppDataSource.manager.getRepository(Roles);
    // this.ormRepository = getManager().getRepository(Roles);
  }

  getRepository() {
    return getManager().getRepository(Roles);
  }


  async get<T>(queryOption?: FindOptionsWhere<T>): Promise<any> {
    return this.getRepository().find({
      where: queryOption
    })
  }
  async save<T>(partialEntity: DeepPartial<any>): Promise<any> {
    return this.getRepository().save(partialEntity);
  }
  async create<T>(partialEntity: DeepPartial<any>): Promise<any> {
    return this.getRepository().create(partialEntity);
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
  public async findByName(name: UserRoleTypes): Promise<Roles | undefined> {
    const findProduct = await this.getRepository().findOne({
      where: {
        name,
      },
    });
    return findProduct;
  }
}