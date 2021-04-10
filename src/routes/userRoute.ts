import { Router } from 'express';
import { getAllUsers, me } from './../controllers/userController';

const router = Router();

router.route('/').get( getAllUsers )
router.route('/:id').get( me )

export default router;
