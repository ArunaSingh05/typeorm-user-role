import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";

import UserRole from "./UserRole.entity";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => UserRole, userRole => userRole.user, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'user_id' })
  userRoles!: UserRole[];
}

export default User;