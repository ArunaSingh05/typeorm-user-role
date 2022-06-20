import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

import UserService from '../services/User.service';

@autoInjectable()
export default class UserController {
  constructor(private entityService?: UserService) { }
  async createUser(req: Request, res: Response, next: any) {
    const resources = await this.entityService?.create(req?.body);
    res.json({ 'createPermission': resources });
  }
}


