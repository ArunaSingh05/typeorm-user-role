import { autoInjectable } from 'tsyringe';

import { ICreatePermissionsDTO } from '../dtos/ICreatePermissionsDTO';
import PermissionRepository from '../repositories/Permission.repository';
import AppError from '../errors/AppError';

@autoInjectable()
export default class PermissionEntityService {
  constructor(

    private permissionRepository: PermissionRepository) { }
  async get<T>(condition = {}): Promise<ICreatePermissionsDTO[]> {
    return this.permissionRepository.get(condition);
  }
  async getByID<T>(id?: T): Promise<ICreatePermissionsDTO> {
    const condition = {
      id: id
    } as any;
    return this.permissionRepository.get(condition);
  }
  async create<T>(entity: ICreatePermissionsDTO): Promise<any> {

    const permission = await this.permissionRepository.get({ 'name': entity.name });
    if (permission?.length) {
      throw new AppError('Duplicate permission enrty');
    }
    return this.permissionRepository.create(entity);
  }
  async updateByID<T>(entity: ICreatePermissionsDTO, id: T): Promise<any> {
    const condition = {
      id: id
    } as any;
    return this.permissionRepository.update(entity, condition);
  }
  async deleteByID<T>(id: T): Promise<any> {
    const condition = {
      id: id
    } as any;
    return this.permissionRepository.delete(condition);
  }
}