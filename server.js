/*--------------------------- Archivo raiz para la configuración ------------------------------------------*/
import express from "express"; // Importa Express para crear el servidor web
import { ApolloServer } from "@apollo/server"; // Importa Apollo Server para GraphQL
import { expressMiddleware } from "@apollo/server/express4"; // Middleware para Apollo Server
import { typeDefs, resolvers } from "./graphql/schema.js"; // Esquema GraphQL
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"; // Plugin de Apollo Server
import http from "http"; // Módulo HTTP de Node.js
import cors from "cors"; // Middleware para habilitar CORS
import sequelize from "./database/db.js"; // Importacion de la base de datos
const app = express(); // Crea una instancia de Express
const httpServer = http.createServer(app); // Crea un servidor HTTP

async function startApolloServer() {
  // Sincroniza los modelos de Sequelize con la base de datos
  await sequelize.sync();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }); // Configura Apollo Server con esquemas y plugins

  await apolloServer.start(); // Inicia Apollo Server

  app.use(
    "/",
    cors(),
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  ); // Configura middleware de Express

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log("🚀 Server en el puerto http://localhost:4000");
}

startApolloServer();
