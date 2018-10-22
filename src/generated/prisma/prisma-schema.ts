export const typeDefs = /* GraphQL */ `type AggregateDirectChannel {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type DirectChannel {
  id: ID!
  user1: User!
  user2: User!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type DirectChannelConnection {
  pageInfo: PageInfo!
  edges: [DirectChannelEdge]!
  aggregate: AggregateDirectChannel!
}

input DirectChannelCreateInput {
  user1: UserCreateOneInput!
  user2: UserCreateOneInput!
  messages: MessageCreateManyWithoutChannelInput
}

input DirectChannelCreateOneWithoutMessagesInput {
  create: DirectChannelCreateWithoutMessagesInput
  connect: DirectChannelWhereUniqueInput
}

input DirectChannelCreateWithoutMessagesInput {
  user1: UserCreateOneInput!
  user2: UserCreateOneInput!
}

type DirectChannelEdge {
  node: DirectChannel!
  cursor: String!
}

enum DirectChannelOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DirectChannelPreviousValues {
  id: ID!
}

type DirectChannelSubscriptionPayload {
  mutation: MutationType!
  node: DirectChannel
  updatedFields: [String!]
  previousValues: DirectChannelPreviousValues
}

input DirectChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DirectChannelWhereInput
  AND: [DirectChannelSubscriptionWhereInput!]
  OR: [DirectChannelSubscriptionWhereInput!]
  NOT: [DirectChannelSubscriptionWhereInput!]
}

input DirectChannelUpdateInput {
  user1: UserUpdateOneRequiredInput
  user2: UserUpdateOneRequiredInput
  messages: MessageUpdateManyWithoutChannelInput
}

input DirectChannelUpdateOneRequiredWithoutMessagesInput {
  create: DirectChannelCreateWithoutMessagesInput
  update: DirectChannelUpdateWithoutMessagesDataInput
  upsert: DirectChannelUpsertWithoutMessagesInput
  connect: DirectChannelWhereUniqueInput
}

input DirectChannelUpdateWithoutMessagesDataInput {
  user1: UserUpdateOneRequiredInput
  user2: UserUpdateOneRequiredInput
}

input DirectChannelUpsertWithoutMessagesInput {
  update: DirectChannelUpdateWithoutMessagesDataInput!
  create: DirectChannelCreateWithoutMessagesInput!
}

input DirectChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user1: UserWhereInput
  user2: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [DirectChannelWhereInput!]
  OR: [DirectChannelWhereInput!]
  NOT: [DirectChannelWhereInput!]
}

input DirectChannelWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  user: User!
  text: String!
  channel: DirectChannel!
  createdAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  user: UserCreateOneInput!
  text: String!
  channel: DirectChannelCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChannelInput {
  user: UserCreateOneInput!
  text: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  user: UserUpdateOneRequiredInput
  text: String
  channel: DirectChannelUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessageUpdateWithoutChannelDataInput {
  user: UserUpdateOneRequiredInput
  text: String
}

input MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChannelDataInput!
}

input MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChannelDataInput!
  create: MessageCreateWithoutChannelInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  channel: DirectChannelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createDirectChannel(data: DirectChannelCreateInput!): DirectChannel!
  updateDirectChannel(data: DirectChannelUpdateInput!, where: DirectChannelWhereUniqueInput!): DirectChannel
  updateManyDirectChannels(data: DirectChannelUpdateInput!, where: DirectChannelWhereInput): BatchPayload!
  upsertDirectChannel(where: DirectChannelWhereUniqueInput!, create: DirectChannelCreateInput!, update: DirectChannelUpdateInput!): DirectChannel!
  deleteDirectChannel(where: DirectChannelWhereUniqueInput!): DirectChannel
  deleteManyDirectChannels(where: DirectChannelWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  directChannel(where: DirectChannelWhereUniqueInput!): DirectChannel
  directChannels(where: DirectChannelWhereInput, orderBy: DirectChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DirectChannel]!
  directChannelsConnection(where: DirectChannelWhereInput, orderBy: DirectChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DirectChannelConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  directChannel(where: DirectChannelSubscriptionWhereInput): DirectChannelSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`