import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    const PORT = process.env.NODE_PORT;
    const apolloGateway = new ApolloGateway({
      serviceList: [
        {
          name: "author-service",
          url: "http://author:4001/graphql"
        },
        {
          name: "genre-service",
          url: "http://genre:4002/graphql"
        }
      ]
    });

    const app = express();
    const graphServer = new ApolloServer({
      gateway: apolloGateway
    });
    await graphServer.start();
    graphServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(
      PORT,
      () => console.log(`Server running on PORT ${PORT}`));
  } catch(error) {
    console.log(error);
  }
})()


