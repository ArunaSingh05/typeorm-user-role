import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import Permissions from "./Permissions.entity";
import Roles from "./Roles.entity";

@Entity('roles_permissions')
class RolePermission {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  role_id!: number;

  @Column()
  permission_id!: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Roles, role => role.rolePermission)
  @JoinColumn({ name: 'role_id' })
  role!: Roles;

  @ManyToOne(() => Permissions, permission => permission.rolePermission)
  @JoinColumn({ name: 'permission_id' })
  permission!: Permissions;
}

export default RolePermission;