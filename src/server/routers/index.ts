import { Router } from 'express';

import PermissionRouter from './permission.route';
import RolesRouter from './role.route';
import UserRouter from './user.route';

const router = Router();

router.use('/permission', PermissionRouter);
router.use('/role', RolesRouter);
router.use('/user', UserRouter)


export default router;