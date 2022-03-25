import express, { Request, Response } from 'express';
import { userRouter } from './routes';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use(userRouter);

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}.`);
  });


export default app;