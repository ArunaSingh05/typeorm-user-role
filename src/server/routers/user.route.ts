import { Router } from 'express';

import UserController from '../controllers/User.controller';

const UserRouter = Router();

const userController = new UserController();

UserRouter.route('/')
  .all(function (req, res, next) {
    next();
  })
  .post(userController.createUser.bind(userController))


export default UserRouter;