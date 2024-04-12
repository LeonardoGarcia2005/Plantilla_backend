// Importar el módulo sequelize para la conexión a la base de datos
import sequelize from "../database/db.js";
// Importar el módulo DataTypes de sequelize para definir los tipos de datos de los campos
import { DataTypes } from "sequelize";

// Definir el modelo del proyecto utilizando sequelize.define()
export const usuarioModel = sequelize.define(
  "usuario",
  {
    // Definir el campo de identificación del usuario
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto habilita la creación automática de campos createdAt y updatedAt para realizar seguimiento de la fecha de creación y modificación de registros.
  }
);
