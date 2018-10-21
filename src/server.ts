import morgan from 'morgan';
import { GraphQLServer } from 'graphql-yoga';

import routes from './routes';
import { typeDefs, resolvers } from './graphql';
import './config/passport';

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(morgan('combined'));
server.express.use(routes);

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
