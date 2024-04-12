// Importar el paquete gql para definir esquemas GraphQL
import { gql } from "graphql-tag";

// Definir los tipos de datos GraphQL
export const typeDefs = gql`
  #Extender el tipo Query para agregar nuevos campos
  extend type Query {
    obtenerUsuarios: [Usuario]
    obtenerUsuario(id: ID): Usuario!
  }

  #Extender el tipo Mutation para agregar nuevas mutaciones
  #extend type Mutation {
    #Aquí se pueden definir mutaciones para crear, actualizar o eliminar usuarios
  #}

  #Definir el tipo de objeto Usuario con sus campos
  type Usuario {
    id: ID!
    name: String!
    password: String!
    email: String!
  }
`;
