import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
export declare class MailerService {
    private readonly mailerService;
    constructor(mailerService: NestMailerService);
    sendTemporaryPassword(to: string, temporaryPassword: string): Promise<void>;
}
