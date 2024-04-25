import { User } from '../../models/User';
import { Email } from '../senders/Email';
import { PushNotification } from '../senders/PushNotification';
import { SMS } from '../senders/SMS';
import { NotificationLogger } from './notificationLogger';

export class NotificationHandler {
  private users: User[];
  private logger: NotificationLogger;
  private sms: SMS;
  private email: Email;
  private pushNotification: PushNotification;

  constructor(users: User[]) {
    this.users = users;
    this.logger = new NotificationLogger();
    this.sms = new SMS();
    this.email = new Email();
    this.pushNotification = new PushNotification();
  }

  public handleMessage(message: string, category: string): void {
    const subscribers = this.getSubscribersForCategory(category);

    subscribers.forEach((user) => {
      user.channels.forEach((channel) => {
        switch (channel) {
          case 'SMS':
            this.sms.send(user.phoneNumber, message);
            this.logger.logNotification(user.id, 'SMS', category, message);
            break;
          case 'Email':
            this.email.send(user.email, message);
            this.logger.logNotification(user.id, 'Email', category, message);
            break;
          case 'Push Notification':
            this.pushNotification.send(user.id, message);
            this.logger.logNotification(user.id, 'Push Notification', category, message);
            break;
          default:
            break;
        }
      });
    });
  }

  private getSubscribersForCategory(category: string): User[] {
    return this.users.filter(user => user.subscribed.includes(category));
  }
}
