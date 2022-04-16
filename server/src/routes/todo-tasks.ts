import express, { Router } from 'express';
import { addToDoTask, deleteToDoTask, editToDoTask, getToDoTasks } from '../controllers/todos-controller';

const router: Router = express.Router();

router.get('/', getToDoTasks)
router.post('/', addToDoTask);
router.patch('/:id', editToDoTask);
router.delete('/:id', deleteToDoTask);

export default router;