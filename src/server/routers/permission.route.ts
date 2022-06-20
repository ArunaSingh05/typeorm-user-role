import { Router } from 'express';

import PermissionController from '../controllers/Permission.controller';

const PermissionRouter = Router();
const permissionController = new PermissionController();

PermissionRouter.route('/')
  .all(function (req, res, next) {
    next();
  })
  .get(permissionController.getPermissions.bind(permissionController))
  .post(permissionController.createPermission.bind(permissionController))

PermissionRouter.route('/:permId')
  .all(function (req, res, next) {
    next();
  })
  .get(permissionController.getPermissionById.bind(permissionController))
  .put(permissionController.updatePermission.bind(permissionController))
  .delete(permissionController.deletePermission.bind(permissionController));


export default PermissionRouter;
