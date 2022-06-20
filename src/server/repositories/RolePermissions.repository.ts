// import { ICreatePermissionsByRoleDTO } from '../dtos/ICreatePermissionsByRoleDTO';
// import { injectable, autoInjectable } from 'tsyringe';
// import { FindOptionsWhere, DeepPartial, EntityRepository, getManager, Repository, getRepository } from 'typeorm';
// import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
// // import { AppDataSource } from '../data-source';

// import RolePermissionsMapping from '../entity/RolePermissions.entity';

// @autoInjectable()
// @EntityRepository(RolePermissionsMapping)
// export default class RolePermissionsRepository {
//   private ormRepository: Repository<any>;
//   constructor() {
//     // this.ormRepository = AppDataSource.manager.getRepository(RolePermissionsMapping);
//   }

//   getRepository() {
//     return getManager().getRepository(RolePermissionsMapping);
//   }

//   async get<T>(queryOption?: FindOptionsWhere<T>): Promise<any> {
//     return this.getRepository().find({
//       where: queryOption
//     })
//   }
//   create<T>(partialEntity: DeepPartial<ICreatePermissionsByRoleDTO>): any {
//     return this.getRepository().create(partialEntity as any);
//   }
//   async save<T>(partialEntity: DeepPartial<ICreatePermissionsByRoleDTO>): Promise<any> {
//     return this.getRepository().save(partialEntity as any);
//   }
//   async update<T>(partialEntity: QueryDeepPartialEntity<ICreatePermissionsByRoleDTO>, queryOption: FindOptionsWhere<T>): Promise<any> {
//     return this.getRepository().update(queryOption, partialEntity as any);
//   }
//   async delete<T>(queryOption: FindOptionsWhere<T>): Promise<any> {
//     return this.getRepository().delete(queryOption);
//   }
// }
