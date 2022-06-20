import { injectable } from "tsyringe";

import UserRepository from "../repositories/User.repository";

@injectable()
export default class UserService {
  constructor(private userRepository: UserRepository) { }
  async create<T>(entity: any): Promise<any> {
    if (entity?.userRoles) {
      const role = await this.userRepository.create(entity);
      return this.userRepository.save(role);
    } else {
      return this.userRepository.save(entity);
    }
  }
}