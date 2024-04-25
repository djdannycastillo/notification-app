import { Request, Response } from 'express';
import { NotificationLogger } from '../../services/notification/notificationLogger';

const notificationLogger = new NotificationLogger();

export const getNotificationLogs = (req: Request, res: Response) => {
  const { userId } = req.query;
  if (userId) {
    const logs = notificationLogger.getLogsForUser(Number(userId));
    res.json(logs);
  } else {
    const logs = notificationLogger.getAllLogs();
    res.json(logs);
  }
};
