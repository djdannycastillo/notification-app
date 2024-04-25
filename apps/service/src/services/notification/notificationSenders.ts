export class SMSSender {
  public send(phoneNumber: string, message: string): void {
      console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }
}

export class EmailSender {
  public send(email: string, message: string): void {
      console.log(`Sending Email to ${email}: ${message}`);
  }
}

export class PushNotificationSender {
  public send(userId: number, message: string): void {
      console.log(`Sending Push Notification to User ${userId}: ${message}`);
  }
}
