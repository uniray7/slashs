import { getRepository } from 'typeorm';
import { Channel } from './entity/channel';
import { User } from './entity/user';
import { Message } from './entity/message';

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

      return message;
    },
    createUser: async (root, { username }) => {
      const user = new User();
      user.username = username;
      await user.save();

      return user;
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

  // Subscription: {
  // messageCreated: {
  // subscribe: async (root, args, { prisma }) => {
  //   return await prisma.$subscribe
  //     .message({
  //       where: {
  //         mutation_in: ['CREATED', 'UPDATED']
  //       }
  //     })
  //     .node();
  // },
  // resolve: payload => payload
  // }
  // },
};

export default resolvers;
