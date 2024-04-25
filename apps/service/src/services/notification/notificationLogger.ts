import fs from 'fs';
import path from 'path';

import { NotificationLog } from '../../models/Notification';

export class NotificationLogger {
  private logsFilePath: string;

  constructor() {
    this.logsFilePath = path.join(__dirname, '../../data/notificationLogs.json');
    this.initializeLogFile();
  }

  private initializeLogFile(): void {
    if (!fs.existsSync(this.logsFilePath)) {
      fs.writeFileSync(this.logsFilePath, '[]', 'utf-8');
    }
  }

  public logNotification(
    userId: number,
    channel: string,
    category: string,
    content: string
  ): void {
    const log: NotificationLog = {
      userId,
      channel,
      category,
      content,
      timestamp: new Date()
    };

    const logs = this.getLogs();
    logs.push(log);
    fs.writeFileSync(this.logsFilePath, JSON.stringify(logs, null, 2), 'utf-8');
  }

  public getLogsForUser(userId: number): NotificationLog[] {
    const logs = this.getLogs();
    return logs.filter(log => log.userId === userId);
  }

  public getAllLogs(): NotificationLog[] {
    const logs = this.getLogs();
    return logs.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  private getLogs(): NotificationLog[] {
    const logsData = fs.readFileSync(this.logsFilePath, 'utf-8');
    return JSON.parse(logsData) as NotificationLog[];
  }
}
