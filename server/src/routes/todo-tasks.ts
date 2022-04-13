import express, { Router } from 'express';
import { addToDoTask, deleteToDoTask, editToDoTask, getToDoTasks } from '../controllers/todos-controller';

const router: Router = express.Router();

router.get('/', getToDoTasks)
router.post('/', addToDoTask);
router.put('/', editToDoTask);
router.delete('/', deleteToDoTask);

export default router;