import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false, // Agrega esta línea para desactivar los registros de SQL en la consola
});

try {
  await sequelize.authenticate();
  console.log('La conexión a la base de datos se ha establecido correctamente.');
} catch (error) {
  console.error('No se puede conectar a la base de datos:', error);
}

export default sequelize;