import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

import RoleEntityService from '../services/roles-entity.service';

@autoInjectable()
export default class RoleController {
  constructor(private entityService?: RoleEntityService) { }
  async createRole(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.create(req.body);
    res.send({ 'createRole': resources });
  }
  async getRoleById(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.getByID(req.params.roleId);
    res.send(resources);
  }

  async getRoles(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.get();
    res.send(resources);
  }

  async updateRole(req: Request, res: Response, next: any) {
    const entity = {
      name: req.body.name
    } as any;
    const resources = await this.entityService?.updateByID(entity, req.params.roleId);
    res.send(resources);
  }
  async deleteRole(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.deleteByID(req.params.roleId);
    res.send(resources);
  }
}


