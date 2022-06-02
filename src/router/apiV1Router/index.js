import { Router } from 'express';
import memberRouter from './member.router.js';
import boardRouter from './board.router.js';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Members
 *   description: 회원가입 및 로그인, 로그아웃
 */
router.use('/member', memberRouter);
/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시글 작성, 수정 및 삭제
 */
router.use('/board', boardRouter);

export default router;
