import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

// Não aplica Typescript?
export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE});