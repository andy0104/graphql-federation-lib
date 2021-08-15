import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import schema from './graphql/schemas-maps';
import {sequelize} from './models/index';

dotenv.config();

(async () => {
  try {
    const PORT = process.env.NODE_PORT;

    const app = express();
    const graphServer = new ApolloServer({
      schema
    });
    await graphServer.start();
    await sequelize.authenticate();
    graphServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(
      PORT,
      () => console.log(`Server running on PORT ${PORT}`));
  } catch(error) {
    console.log(error);
  }
})()


