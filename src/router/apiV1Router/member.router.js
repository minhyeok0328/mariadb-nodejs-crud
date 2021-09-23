import { Router } from 'express';
import { MemberController } from "../../controller/member.controller.js";

const { register, test, checkDuplicatedId } = MemberController;
const router = Router();

router.post('/register', register);
router.get('/test', test);
router.get('/checkDuplicatedId/:id', checkDuplicatedId);

export default router;
