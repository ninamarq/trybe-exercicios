import { UserModel } from '../models';
import connection from '../models/connection';
import IUser from '../interfaces/IUser';

export default class UserService {
  public model: UserModel;
  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }
}
