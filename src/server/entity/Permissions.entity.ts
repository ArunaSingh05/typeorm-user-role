import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import RolePermission from "./RolePermission.entity";
import Roles from "./Roles.entity";

import UserRole from "./UserRole.entity";

@Entity('permissions')
export default class Permissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true
  })
  name: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UserRole, userRole => userRole.permission, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'permission_id' })
  userRoles!: UserRole[];

  @OneToMany(() => RolePermission, rolePermission => rolePermission.permission, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'permission_id' })
  rolePermission!: RolePermission[];
}


