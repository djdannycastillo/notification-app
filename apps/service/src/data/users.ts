import { User } from '../models/User';

export const users: User[] = [
  {
      id: 1,
      name: 'User 1',
      email: 'user1@example.com',
      phoneNumber: '123456789',
      subscribed: ['Sports', 'Finance'],
      channels: ['SMS', 'Email']
  },
  {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
      phoneNumber: '987654321',
      subscribed: ['Movies'],
      channels: ['Push Notification']
  }
];