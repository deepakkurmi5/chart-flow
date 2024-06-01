import { Router } from 'express';
import { UsersController } from '../controller/users.controller';

const router = Router();

const users = new UsersController();

router.get('/', users.getUsers);
router.get('/:id', users.getUserById);
router.post('/create', users.createUser);

export default router;
