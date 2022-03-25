import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

export default class UserModel {
  // Pool seria a tipagem do myConnection que utilizamos
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [users] = await this.connection.execute('SELECT * FROM users_api.users');
    // ResultSetHeaders??
    return users as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [firstRow] = await this.connection.execute(`SELECT * FROM users_api.users
      WHERE id = ?
    `, [id]);
    // desestrutura tipando
    const [user] = firstRow as IUser[];
    return user;
  }

  public UserModel() {}
}
