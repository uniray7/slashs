import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Message } from './message';
import { Channel } from './channel';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ManyToMany(type => Channel, channel => channel.members)
  @JoinTable()
  channels: Channel[];
}
