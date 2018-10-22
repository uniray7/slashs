// Code generated by Prisma (prisma@1.18.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  directChannel: (where?: DirectChannelWhereInput) => Promise<boolean>;
  message: (where?: MessageWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  directChannel: (where: DirectChannelWhereUniqueInput) => DirectChannel;
  directChannels: (
    args?: {
      where?: DirectChannelWhereInput;
      orderBy?: DirectChannelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<DirectChannelNode>;
  directChannelsConnection: (
    args?: {
      where?: DirectChannelWhereInput;
      orderBy?: DirectChannelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => DirectChannelConnection;
  message: (where: MessageWhereUniqueInput) => Message;
  messages: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<MessageNode>;
  messagesConnection: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MessageConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createDirectChannel: (data: DirectChannelCreateInput) => DirectChannel;
  updateDirectChannel: (
    args: {
      data: DirectChannelUpdateInput;
      where: DirectChannelWhereUniqueInput;
    }
  ) => DirectChannel;
  updateManyDirectChannels: (
    args: { data: DirectChannelUpdateInput; where?: DirectChannelWhereInput }
  ) => BatchPayload;
  upsertDirectChannel: (
    args: {
      where: DirectChannelWhereUniqueInput;
      create: DirectChannelCreateInput;
      update: DirectChannelUpdateInput;
    }
  ) => DirectChannel;
  deleteDirectChannel: (where: DirectChannelWhereUniqueInput) => DirectChannel;
  deleteManyDirectChannels: (where?: DirectChannelWhereInput) => BatchPayload;
  createMessage: (data: MessageCreateInput) => Message;
  updateMessage: (
    args: { data: MessageUpdateInput; where: MessageWhereUniqueInput }
  ) => Message;
  updateManyMessages: (
    args: { data: MessageUpdateInput; where?: MessageWhereInput }
  ) => BatchPayload;
  upsertMessage: (
    args: {
      where: MessageWhereUniqueInput;
      create: MessageCreateInput;
      update: MessageUpdateInput;
    }
  ) => Message;
  deleteMessage: (where: MessageWhereUniqueInput) => Message;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  directChannel: (
    where?: DirectChannelSubscriptionWhereInput
  ) => DirectChannelSubscriptionPayloadSubscription;
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type DirectChannelOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  name: String;
}

export type DirectChannelWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface DirectChannelUpdateInput {
  user1?: UserUpdateOneRequiredInput;
  user2?: UserUpdateOneRequiredInput;
  messages?: MessageUpdateManyWithoutChannelInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateDataInput {
  name?: String;
}

export interface MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutChannelDataInput;
  create: MessageCreateWithoutChannelInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface MessageUpdateWithoutChannelDataInput {
  user?: UserUpdateOneRequiredInput;
  text?: String;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MessageWhereInput;
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
}

export interface MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutChannelDataInput;
}

export interface UserUpdateInput {
  name?: String;
}

export interface MessageUpdateManyWithoutChannelInput {
  create?:
    | MessageCreateWithoutChannelInput[]
    | MessageCreateWithoutChannelInput;
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  update?:
    | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    | MessageUpdateWithWhereUniqueWithoutChannelInput;
  upsert?:
    | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    | MessageUpsertWithWhereUniqueWithoutChannelInput;
}

export interface DirectChannelUpdateWithoutMessagesDataInput {
  user1?: UserUpdateOneRequiredInput;
  user2?: UserUpdateOneRequiredInput;
}

export interface MessageUpdateInput {
  user?: UserUpdateOneRequiredInput;
  text?: String;
  channel?: DirectChannelUpdateOneRequiredWithoutMessagesInput;
}

export interface DirectChannelCreateWithoutMessagesInput {
  user1: UserCreateOneInput;
  user2: UserCreateOneInput;
}

export interface DirectChannelCreateInput {
  user1: UserCreateOneInput;
  user2: UserCreateOneInput;
  messages?: MessageCreateManyWithoutChannelInput;
}

export interface MessageCreateInput {
  user: UserCreateOneInput;
  text: String;
  channel: DirectChannelCreateOneWithoutMessagesInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface DirectChannelSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: DirectChannelWhereInput;
  AND?:
    | DirectChannelSubscriptionWhereInput[]
    | DirectChannelSubscriptionWhereInput;
  OR?:
    | DirectChannelSubscriptionWhereInput[]
    | DirectChannelSubscriptionWhereInput;
  NOT?:
    | DirectChannelSubscriptionWhereInput[]
    | DirectChannelSubscriptionWhereInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface DirectChannelUpdateOneRequiredWithoutMessagesInput {
  create?: DirectChannelCreateWithoutMessagesInput;
  update?: DirectChannelUpdateWithoutMessagesDataInput;
  upsert?: DirectChannelUpsertWithoutMessagesInput;
  connect?: DirectChannelWhereUniqueInput;
}

export interface MessageWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  channel?: DirectChannelWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: MessageWhereInput[] | MessageWhereInput;
  OR?: MessageWhereInput[] | MessageWhereInput;
  NOT?: MessageWhereInput[] | MessageWhereInput;
}

export interface DirectChannelWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user1?: UserWhereInput;
  user2?: UserWhereInput;
  messages_every?: MessageWhereInput;
  messages_some?: MessageWhereInput;
  messages_none?: MessageWhereInput;
  AND?: DirectChannelWhereInput[] | DirectChannelWhereInput;
  OR?: DirectChannelWhereInput[] | DirectChannelWhereInput;
  NOT?: DirectChannelWhereInput[] | DirectChannelWhereInput;
}

export interface MessageCreateWithoutChannelInput {
  user: UserCreateOneInput;
  text: String;
}

export interface MessageCreateManyWithoutChannelInput {
  create?:
    | MessageCreateWithoutChannelInput[]
    | MessageCreateWithoutChannelInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface DirectChannelUpsertWithoutMessagesInput {
  update: DirectChannelUpdateWithoutMessagesDataInput;
  create: DirectChannelCreateWithoutMessagesInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface DirectChannelCreateOneWithoutMessagesInput {
  create?: DirectChannelCreateWithoutMessagesInput;
  connect?: DirectChannelWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface DirectChannelEdgeNode {
  cursor: String;
}

export interface DirectChannelEdge
  extends Promise<DirectChannelEdgeNode>,
    Fragmentable {
  node: <T = DirectChannel>() => T;
  cursor: () => Promise<String>;
}

export interface DirectChannelEdgeSubscription
  extends Promise<AsyncIterator<DirectChannelEdgeNode>>,
    Fragmentable {
  node: <T = DirectChannelSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MessageSubscriptionPayload
  extends Promise<MessageSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Message>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValues>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface DirectChannelConnectionNode {}

export interface DirectChannelConnection
  extends Promise<DirectChannelConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<DirectChannelEdgeNode>>() => T;
  aggregate: <T = AggregateDirectChannel>() => T;
}

export interface DirectChannelConnectionSubscription
  extends Promise<AsyncIterator<DirectChannelConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DirectChannelEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDirectChannelSubscription>() => T;
}

export interface AggregateMessageNode {
  count: Int;
}

export interface AggregateMessage
  extends Promise<AggregateMessageNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessageNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MessagePreviousValuesNode {
  id: ID_Output;
  text: String;
  createdAt: DateTimeOutput;
}

export interface MessagePreviousValues
  extends Promise<MessagePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface MessageConnectionNode {}

export interface MessageConnection
  extends Promise<MessageConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<MessageEdgeNode>>() => T;
  aggregate: <T = AggregateMessage>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface MessageNode {
  id: ID_Output;
  text: String;
  createdAt: DateTimeOutput;
}

export interface Message extends Promise<MessageNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = User>() => T;
  text: () => Promise<String>;
  channel: <T = DirectChannel>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<MessageNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  text: () => Promise<AsyncIterator<String>>;
  channel: <T = DirectChannelSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface DirectChannelPreviousValuesNode {
  id: ID_Output;
}

export interface DirectChannelPreviousValues
  extends Promise<DirectChannelPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface DirectChannelPreviousValuesSubscription
  extends Promise<AsyncIterator<DirectChannelPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface DirectChannelSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface DirectChannelSubscriptionPayload
  extends Promise<DirectChannelSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DirectChannel>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DirectChannelPreviousValues>() => T;
}

export interface DirectChannelSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DirectChannelSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DirectChannelSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DirectChannelPreviousValuesSubscription>() => T;
}

export interface DirectChannelNode {
  id: ID_Output;
}

export interface DirectChannel
  extends Promise<DirectChannelNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user1: <T = User>() => T;
  user2: <T = User>() => T;
  messages: <T = FragmentableArray<MessageNode>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface DirectChannelSubscription
  extends Promise<AsyncIterator<DirectChannelNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user1: <T = UserSubscription>() => T;
  user2: <T = UserSubscription>() => T;
  messages: <T = Promise<AsyncIterator<MessageSubscription>>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateDirectChannelNode {
  count: Int;
}

export interface AggregateDirectChannel
  extends Promise<AggregateDirectChannelNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDirectChannelSubscription
  extends Promise<AsyncIterator<AggregateDirectChannelNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MessageEdgeNode {
  cursor: String;
}

export interface MessageEdge extends Promise<MessageEdgeNode>, Fragmentable {
  node: <T = Message>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdgeNode>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserNode {
  id: ID_Output;
  name: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  endpoint: `https://us1.prisma.sh/slashs/db/dev`
});
export const prisma = new Prisma();