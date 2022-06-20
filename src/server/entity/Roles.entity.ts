import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { UserRoleTypes } from "../enums/user-roles.enum";
import Permissions from "./Permissions.entity";
import RolePermission from "./RolePermission.entity";
import UserRole from "./UserRole.entity";
@Entity('roles')
export default class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserRoleTypes,
    default: UserRoleTypes.GUEST,
    unique: true,
  })
  name: UserRoleTypes

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UserRole, userRole => userRole.role, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'role_id' })
  userRoles!: UserRole[];

  @OneToMany(() => RolePermission, rolePermission => rolePermission.role, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'role_id' })
  rolePermission!: RolePermission[];
}




