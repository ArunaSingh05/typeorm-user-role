import { autoInjectable } from "tsyringe";
import { DeepPartial, EntityRepository, getManager } from "typeorm";

import User from "../entity/User.entity";

@autoInjectable()
@EntityRepository(User)
export default class UserRepository {
  getRepository() {
    return getManager().getRepository(User);
  }
  async save<T>(partialEntity: DeepPartial<any>): Promise<any> {
    return this.getRepository().save(partialEntity);
  }
  async create<T>(partialEntity: DeepPartial<any>): Promise<any> {
    return this.getRepository().create(partialEntity);
  }
}