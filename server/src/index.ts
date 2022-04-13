import express, { Application, Request, Response } from 'express';
import { notFound } from './helpers/error-helpers';
import toDoTasksRouter from './routes/todo-tasks';

const app: Application = express();

app.use([express.json()]);
app.use('/api/todo-tasks', toDoTasksRouter);

app.all('*', (req: Request, res: Response) => {    
    return notFound(res, 'request route not found!');
})

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});