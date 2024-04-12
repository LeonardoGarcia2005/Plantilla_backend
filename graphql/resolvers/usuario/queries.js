// Importar el modelo de usuario desde la ubicación adecuada en el proyecto
import { usuarioModel } from "../../../models/Usuarios.js";

export const resolvers = {
  Query: {
    obtenerUsuarios: async () => {
      try {
        // Consultar todos los usuarios desde la base de datos, ordenados por el campo 'id' de forma ascendente
        const response = await usuarioModel.findAll({
          order: [["id", "ASC"]],
        });
        return response;
      } catch (error) {
        // Manejar errores en caso de que ocurran durante la consulta
        console.error("Error al consultar los usuarios:", error);
        throw error;
      }
    },
    obtenerUsuario: async (_, { id }) => {
      try {
        const response = await usuarioModel.findOne({
          where: { id }, // Especificar la condición de búsqueda por el ID proporcionado
        });
        return response;
      } catch (error) {
        console.error("Error al consultar el usuario:", error);
        throw error;
      }
    },
  },
};
