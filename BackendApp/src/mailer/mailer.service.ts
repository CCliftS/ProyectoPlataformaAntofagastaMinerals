// mailer.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer'; // Utiliza el alias "NestMailerService" o cualquier otro nombre que desees

@Injectable()
export class MailerService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendTemporaryPassword(to: string, temporaryPassword: string) {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Contraseña temporal', // Asunto del correo
      text: `Tu contraseña temporal es: ${temporaryPassword}`, // Contenido del correo
    });
  }
}
