import { Router } from 'express';
import { BoardController } from "../../controller/board.controller.js";

const { getBoardList, boardWrite } = BoardController;
const router = Router();

router.get('/list', getBoardList);
router.post('/write', boardWrite);

export default router;
