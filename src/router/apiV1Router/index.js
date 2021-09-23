import { Router } from 'express';
import memberRouter from './member.router.js';

const router = Router();

router.use('/member', memberRouter);

export default router;
