// import { autoInjectable } from 'tsyringe';

// import RolePermissionEntityService from '../services/role-permissions-entity.service';

// @autoInjectable()
// export default class RolesPermissionController {
//   constructor(private entityService?: RolePermissionEntityService) { }
//   async createPermissionByRole(req: any, res: any, next: any) {
//     const { permission_id, role_id } = req.body;
//     const entity = {
//       "permission_id": permission_id,
//       "role_id": role_id
//     }
//     console.log('BODY', req.body);
//     const resources = await this.entityService?.create(entity);
//     res.send({ 'createPermissionByRole': resources });
//   }
//   async getPermissionByRole(req: any, res: any, next: any) {
//     const condition = {
//       role_id: req.params.roleId,
//     }
//     const resources = await this.entityService?.get(condition);
//     res.send(resources);
//   }
//   async updatePermissionByRoleID(req: any, res: any, next: any) {
//     const entity = {
//       permission_id: req.body.permission_id,
//     } as any;
//     const resources = await this.entityService?.updateByID(entity, req.params.role_id);
//     res.send(resources);
//   }
//   async deletePermissionByRoleID(req: any, res: any, next: any) {
//     const resources = await this.entityService?.deleteByID(req.params.role_id);
//     res.send(resources);
//   }
// }


