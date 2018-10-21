import { PubSub } from 'graphql-yoga';

const pubsub = new PubSub();

const MSG_ADDED = 'MSG_ADDED';
// Test data
let messages = [
  {
    id: 1,
    user: 'user1',
    text: 'test msg1'
  },
  {
    id: 2,
    user: 'user2',
    text: 'test msg2'
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
        text: args.text
      };
      pubsub.publish(MSG_ADDED, { messageAdded: newMsg });
      messages.push(newMsg);
      return newMsg;
    }
  }
};

export default resolvers;
