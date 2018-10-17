import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Subscription {
    messageAdded: Message
  }

  type Mutation {
    addMessage(text: String): Message
  }

  type Query {
    hello: String
    messages: [Message]
  }

  type Message {
    id: ID
    user: String
    text: String
  }
`;

export default typeDefs;
