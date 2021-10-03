import { Router } from 'express';
import { BoardController } from "../../controller/board.controller.js";

const { boardList, boardView, boardWrite, boardUpdate, boardDelete } = BoardController;
const router = Router();

router.get('/list', boardList);
router.get('/view/:idx', boardView);
router.post('/write', boardWrite);
router.put('/update', boardUpdate);
router.delete('/delete/:idx', boardDelete);

export default router;
