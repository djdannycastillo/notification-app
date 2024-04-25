import express, { Request, Response } from 'express';

import { getNotificationLogs } from '../controllers/logs';
import { handleMessage } from '../controllers/notifications';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Developed by Daniel Castillo' });
});
router.get('/logs', getNotificationLogs);
router.post('/notification', handleMessage);

export default router;


