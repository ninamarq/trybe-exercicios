import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { UserService } from '../services';

export default class UserController {
  //Por que passa no parametro, dentro do constructor e nao nas chaves??
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Não encontrado!',
      });

    }
    return res.status(StatusCodes.OK).json(user);
  }
}
