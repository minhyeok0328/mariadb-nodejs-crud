import { Router } from 'express';
import { BoardController } from "../../controller/board.controller.js";

const { boardList, boardView, boardWrite, boardUpdate, boardDelete } = BoardController;
const router = Router();

router.get('/list', boardList);
router.get('/:idx', boardView);
router.post('/', boardWrite);
router.put('/', boardUpdate);
router.delete('/:idx', boardDelete);

export default router;
