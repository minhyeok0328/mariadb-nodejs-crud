import { Router } from 'express';
import { MemberController } from "../../controller/member.controller.js";

const { signup, signin, getMemberInfo, logout } = MemberController;
const router = Router();

/**
 * @swagger
 * /api/v1/member:
 *   get:
 *     description: 게시글 조회
 *     tags: [Members]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "category"
 *       in: "query"
 *       description: "조회할 카테고리 id, 중첩 가능. ex) category=1&category=2&category=3"
 *       type: "string"
 *     - name: "query"
 *       in: "query"
 *       description: "검색어"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *     
*/
router.get('/getMemberInfo', getMemberInfo);

router.get('/logout', logout);
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
