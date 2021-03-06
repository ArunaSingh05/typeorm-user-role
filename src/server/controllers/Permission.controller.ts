import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

import PermissionEntityService from '../services/permissions-entity.service';

@autoInjectable()
export default class PermissionController {
  constructor(private entityService?: PermissionEntityService) { }
  async createPermission(req: Request, res: Response, next: any) {
    const entity = {
      name: req.body.name
    } as any;
    const resources = await this.entityService?.create(entity);
    res.json(resources);
  }
  async getPermissionById(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.getByID(req.params.permId);
    res.json(resources);
  }
  async getPermissions(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.get();
    res.json(resources);
  }
  async updatePermission(req: Request, res: Response, next: any) {
    const entity = {
      name: req.body.name
    } as any;
    const resources = await this.entityService?.updateByID(entity, req.params.permId);
    res.json(resources);
  }
  async deletePermission(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.deleteByID(req.params.permId);
    res.json(resources);
  }
}


