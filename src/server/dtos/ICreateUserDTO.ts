
export interface IUserRole {
  role_id: number;
  permission_id: number
}


export interface ICreateRolesDTO {
  name: string;
  email: string;
  userRoles?: IUserRole[];
}


