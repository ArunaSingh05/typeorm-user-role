import { DataSource, getConnectionManager } from "typeorm";

import AppConfig from "./config/app-config"
import Permissions from "./entity/Permissions.entity";
import RolePermission from "./entity/RolePermission.entity";
import Roles from "./entity/Roles.entity";
import User from "./entity/User.entity";
import UserRole from "./entity/UserRole.entity";

const connectionManager = getConnectionManager();
export default connectionManager.create({
    name: 'default',
    type: 'mysql',
    host: AppConfig.DATABASE_HOST,
    port: 3306,
    username: AppConfig.DATABASE_USER,
    password: AppConfig.DATABASE_PASSWORD,
    database: AppConfig.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Roles, Permissions, UserRole, User, RolePermission],
    migrations: [],
    subscribers: [],
});
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: AppConfig.DATABASE_HOST,
    port: 3306,
    username: AppConfig.DATABASE_USER,
    password: AppConfig.DATABASE_PASSWORD,
    database: AppConfig.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: ["server/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
