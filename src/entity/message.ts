import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { User } from './user';
import { Channel } from './channel';

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User)
  user: User;

  @Column()
  text: string;

  @ManyToOne(type => Channel, channel => channel.messages)
  channel: string;

  @Column()
  createdAt: string;
}
