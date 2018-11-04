import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  ManyToMany,
  OneToMany
} from 'typeorm';
import { User } from './user';
import { Message } from './message';

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Message, message => message.channel)
  messages: Message[];

  @ManyToMany(type => User, user => user.channels)
  members: User[];
}
