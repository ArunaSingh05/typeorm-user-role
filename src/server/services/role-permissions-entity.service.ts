// import { autoInjectable, container, inject } from 'tsyringe';
// import { ICreatePermissionsByRoleDTO } from '../dtos/ICreatePermissionsByRoleDTO';
// import RolePermissionsMapping from '../entity/RolePermissions.entity';
// import AppError from '../errors/AppError';
// import PermissionRepository from '../repositories/Permission.repository';
// import RoleRepository from '../repositories/Role.repository';

// import RolePermissionsRepository from '../repositories/RolePermissions.repository';

// @autoInjectable()
// export default class RolePermissionEntityService {
//   constructor(
//     private roleRepository?: RoleRepository,
//     private permissionRepository?: PermissionRepository,
//     private rolePermissionsMappingRepository?: RolePermissionsRepository) { }
//   async get<T>(condition = {}): Promise<T[]> {
//     return this.rolePermissionsMappingRepository.get(condition);
//   }
//   async getByID<T>(id?: number): Promise<T> {
//     const condition = {
//       id: id
//     } as any;
//     return this.rolePermissionsMappingRepository.get(condition);
//   }
//   async create<T>(entity: ICreatePermissionsByRoleDTO): Promise<any> {
//     const permission = await this.permissionRepository.findAllById([entity.permission_id]);
//     const role = await this.roleRepository.findAllById([entity.role_id]);
//     console.log('PERMISSION', permission);
//     console.log('ROLE', role)
//     if (!permission?.length || !role?.length) {
//       throw new AppError("Role and permission should exists");
//     }
//     const entityMapper = this.rolePermissionsMappingRepository.create({});
//     entityMapper.role = role;
//     entityMapper.permission = permission;
//     return this.rolePermissionsMappingRepository.save(entityMapper);
//   }
//   async updateByID<T>(entity: T, id: number): Promise<any> {
//     const condition = {
//       id: id
//     } as any;
//     return this.rolePermissionsMappingRepository.update(entity, condition);
//   }

//   async deleteByID<T>(id: number): Promise<any> {
//     const condition = {
//       id: id
//     } as any;
//     return this.rolePermissionsMappingRepository.delete(condition);
//   }
// }