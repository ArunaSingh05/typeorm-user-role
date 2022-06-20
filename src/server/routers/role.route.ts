import { Router } from 'express';

import RoleController from '../controllers/Role.controller';

const RolesRouter = Router();

const roleController = new RoleController();

RolesRouter.route('/')
  .all(function (req, res, next) {
    next();
  })
  .get(roleController.getRoles.bind(roleController))
  .post(roleController.createRole.bind(roleController))

RolesRouter.route('/:roleId')
  .all(function (req, res, next) {
    next();
  })
  .get(roleController.getRoleById.bind(roleController))
  .put(roleController.updateRole.bind(roleController))
  .delete(roleController.deleteRole.bind(roleController));

export default RolesRouter;