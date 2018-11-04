const resolvers = {
  Query: {
    hello: () => 'Hello world!'
    // users: (root, args, { prisma }) => prisma.users(),
    // user: (root, { id }, { prisma }) => prisma.user({ id }),
    // channel: (root, { id }, { prisma }) => prisma.channel({ id }),
    // myChannels: async (root, { userId }, { prisma }) => {
    //   const userChannels = await prisma
    //     .userChannels({
    //       where: {
    //         user: { id: userId }
    //       }
    //     })
    //     .channels();
    //   return prisma
    //     .userChannels({
    //       where: {
    //         AND: [
    //           { channel: { id__in: channelIds } },
    //           { NOT: { user: { id: userId } } }
    //         ]
    //       }
    //     })
    //     .users();
    // }
  }

  // Mutation: {
  // createMessage: async (root, { text, userId, channelId }, { prisma }) => {
  //   return await prisma.createMessage({
  //     text,
  //     user: { connect: { id: userId } },
  //     channel: { connect: { id: channelId } }
  //   });
  // },
  // createUser: async (root, { name }, { prisma }) =>
  //   await prisma.createUser({ name })
  // },

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

  // Channel: {
  // messages: ({ id }, args, { prisma }) => prisma.channel({ id }).messages()
  // }

  // UserChannel: {
  // user: ({ id }, args, { prisma }) => prisma.userChannel({ id }).user(),
  // channel: ({ id }, args, { prisma }) => prisma.userChannel({ id }).channel()
  // },

  // Message: {
  // user: ({ id }, args, { prisma }) => prisma.message({ id }).user(),
  // channel: ({ id }, args, { prisma }) =>
  //   prisma.message({ id }).directChannel()
  // }
};

export default resolvers;
