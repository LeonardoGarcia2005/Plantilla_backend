import { gql } from "graphql-tag";
/*---------------------- Importación global de las definiciones de tipo de datos --------------------------*/
import { typeDefs as usuario } from "./typeDefs/Usuario.js";
/*---------------------- Importación global de los solucionadores o los resolvers (Donde estara la logica de nuestro servicio) --------------------------*/
import { resolvers as usuarioQueries } from "./resolvers/usuario/queries.js";
const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

/* typeDefs globales pasados a (server.js) */
export const typeDefs = [rootTypeDefs, usuario];

/* Resolvers globales pasados a (server.js) */
export const resolvers = [usuarioQueries];
