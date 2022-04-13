import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.all('*', (req: Request, res: Response) => {    
    return res.status(404).send('Response');
})

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});