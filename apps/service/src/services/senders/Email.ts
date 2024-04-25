export class Email {
  public send(email: string, message: string): void {
    console.log(`Sending Email to ${email}: ${message}`);
  }
}
