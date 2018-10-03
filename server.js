import express from 'express';
import morgan from 'morgan'; // logger request
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const PORT = 4000;
const app = express();
app.use(morgan('combined'));
require('./config/passport');
var routes = require('./routes');
app.use(routes);

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${
      server.subscriptionsPath
    }`
  );
});

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );

var usersRouter = require('./routes/users');
