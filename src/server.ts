import morgan from 'morgan';
import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import routes from './routes';
import resolvers from './resolvers';
import './config/passport';

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.express.use(morgan('combined'));
server.express.use(routes);

createConnection().then(() => {
  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
});
