export class PushNotification {
  public send(userId: number, message: string): void {
      console.log(`Sending Push Notification to User ${userId}: ${message}`);
  }
}
