import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import Permissions from "./Permissions.entity";
import Roles from "./Roles.entity";
import User from "./User.entity";

@Entity('user_roles')
class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id!: number;

  @Column()
  role_id!: number;

  @Column()
  permission_id!: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: User;


  @ManyToOne(() => Roles, role => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  role: Roles;

  @ManyToOne(() => Permissions, permission => permission.userRoles)
  @JoinColumn({ name: 'permission_id' })
  permission!: Permissions;
}

export default UserRole;