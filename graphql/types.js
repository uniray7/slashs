const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Subscription {
    messageAdded: Message
  }

  type Mutation {
    addMessage(message: String): Message
  }

  type Query {
    hello: String
    messages: [Message]
  }

  type Message {
    id: ID
    user: String
    content: String
  }
`;

module.exports = typeDefs;
