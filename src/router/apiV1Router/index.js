import { Router } from 'express';
import memberRouter from './member.router.js';
import boardRouter from './board.router.js';

const router = Router();

router.use('/member', memberRouter);
router.use('/board', boardRouter);

export default router;
