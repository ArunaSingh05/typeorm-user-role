import { inject, injectable } from 'tsyringe';

import { ICreateRolesDTO } from '../dtos/ICreateRolesDTO';
import PermissionRepository from '../repositories/Permission.repository';
import RoleRepository from '../repositories/Role.repository';
@injectable()
export default class RoleEntityService {
  constructor(private roleRepository: RoleRepository, private permissionRepository: PermissionRepository) { }
  async get<T>(condition = {}): Promise<ICreateRolesDTO[]> {
    return this.roleRepository.get(condition);
  }
  async getByID<T>(id?: T): Promise<ICreateRolesDTO> {
    const condition = {
      id: id
    } as any;
    return this.roleRepository.get(condition);
  }
  async create<T>(entity: ICreateRolesDTO): Promise<any> {
    if (entity?.rolePermission) {

      const role = await this.roleRepository.create(entity);
      console.log('ROLE', role);
      return this.roleRepository.save(role);
    } else {
      return this.roleRepository.save(entity);
    }
  }

  async updateByID<T>(entity: ICreateRolesDTO, id: T): Promise<ICreateRolesDTO> {
    const condition = {
      id: id
    } as any;
    return this.roleRepository.update(entity, condition);
  }
  async deleteByID<T>(id: T): Promise<any> {
    const condition = {
      id: id
    } as any;
    return this.roleRepository.delete(condition);
  }
}