const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: (root, args, { prisma }) => prisma.users(),
    user: (root, { id }, { prisma }) => prisma.user({ id }),
    channel: (root, { id }, { prisma }) => prisma.directChannel({ id }),
    channels: (root, args, { prisma }) => prisma.directChannels()
  },

  Mutation: {
    createMessage: async (root, { text, userId, channelId }, { prisma }) => {
      return await prisma.createMessage({
        text,
        user: { connect: { id: userId } },
        channel: { connect: { id: channelId } }
      });
    },
    createUser: async (root, { name }, { prisma }) =>
      await prisma.createUser({ name })
  },

  Subscription: {
    messageCreated: {
      subscribe: async (root, args, { prisma }) => {
        return await prisma.$subscribe
          .message({
            where: {
              mutation_in: ['CREATED', 'UPDATED']
            },
          })
          .node();
      },
      resolve: payload => payload,
    }
  },

  DirectChannel: {
    user1: ({ id }, args, { prisma }) => prisma.directChannel({ id }).user1(),
    user2: ({ id }, args, { prisma }) => prisma.directChannel({ id }).user2(),
    messages: ({ id }, args, { prisma }) =>
      prisma.directChannel({ id }).messages()
  },

  Message: {
    user: ({ id }, args, { prisma }) => prisma.message({ id }).user(),
    channel: ({ id }, args, { prisma }) =>
      prisma.message({ id }).directChannel()
  }
};

export default resolvers;
