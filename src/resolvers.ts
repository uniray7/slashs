import { PubSub } from 'graphql-yoga';
import { getRepository } from 'typeorm';
import { Channel } from './entity/channel';
import { User } from './entity/user';
import { Message } from './entity/message';

const pubsub = new PubSub();
const MESSAGE_CREATED = 'MESSAGE_CREATED';

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    channel: async (root, { id }) => {
      const channelRepository = getRepository(Channel);
      return await channelRepository.findOne(id);
    },
    user: async (root, { id }) => await getRepository(User).findOne(id)
  },

  Mutation: {
    createMessage: async (root, { text, userId, channelId }) => {
      const message = new Message();
      message.text = text;
      message.user = userId;
      message.channel = channelId;
      await message.save();

      pubsub.publish(MESSAGE_CREATED, { messageCreated: message });
      return message;
    },
    createUser: async (root, { username }) => {
      const user = new User();
      user.username = username;
      await user.save();

      return user;
    }
  },

  Subscription: {
    messageCreated: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_CREATED])
    }
  },

  Message: {
    user: async ({ id }) => await getRepository(User).findOne(id)
  },

  Channel: {
    messages: async ({ id }) =>
      (await getRepository(Message).find({
        where: { channel: id }
      })) || []
  },

  User: {
    channels: async ({ id }) => {
      const user = await getRepository(User).findOne({
        where: { id },
        relations: ['channels']
      });

      return user ? user.channels : [];
    }
  }
};

export default resolvers;
