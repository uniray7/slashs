import { PubSub } from 'apollo-server-express';

const pubsub = new PubSub();

const MSG_ADDED = 'MSG_ADDED';
// Test data
let messages = [
  {
    id: 1,
    user: 'user1',
    content: 'test msg1'
  },
  {
    id: 2,
    user: 'user2',
    content: 'test msg2'
  }
];

const resolvers = {
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MSG_ADDED])
    }
  },
  Query: {
    hello: () => 'Hello world!',
    messages: () => messages
  },
  Mutation: {
    addMessage(root, args) {
      const newMsg = {
        id: messages.length + 1,
        user: 'user3',
        content: args.message
      };
      pubsub.publish(MSG_ADDED, { messageAdded: newMsg });
      messages.push(newMsg);
      return newMsg;
    }
  }
};

export default resolvers;
