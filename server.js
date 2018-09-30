const express = require('express');
const morgan = require('morgan'); // logger request
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(morgan('combined'))
server.applyMiddleware({ app });

require('./config/passport');
var routes = require('./routes')
app.use(routes);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

var usersRouter = require("./routes/users");
