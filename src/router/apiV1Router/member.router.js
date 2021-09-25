import { Router } from 'express';
import { MemberController } from "../../controller/member.controller.js";

const { signup, signin, getMemberInfo, logout } = MemberController;
const router = Router();

router.get('/getMemberInfo', getMemberInfo);
router.get('/logout', logout);
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
