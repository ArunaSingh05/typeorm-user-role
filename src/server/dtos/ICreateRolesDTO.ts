import { UserRoleTypes } from "../enums/user-roles.enum";

export interface IRolePermission {
  permission_id: number;
}
export interface ICreateRolesDTO {
  name: UserRoleTypes;
  rolePermission?: IRolePermission[];
}
