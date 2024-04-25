import { Request, Response } from 'express';

import { users } from '../../data/users';
import { NotificationHandler } from '../../services/notification/notificationHandler';

const notificationHandler = new NotificationHandler(users);

export const handleMessage = (req: Request, res: Response) => {
  const { message, category } = req.body;

  notificationHandler.handleMessage(message, category);
  res.status(200).send('Notification has been sent successfully');
};
