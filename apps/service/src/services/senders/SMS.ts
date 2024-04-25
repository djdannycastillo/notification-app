export class SMS {
  public send(phoneNumber: string, message: string): void {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }
}
