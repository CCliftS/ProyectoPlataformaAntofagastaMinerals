import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { MailerService } from '../../mailer/mailer.service';
import { randomBytes } from 'crypto';
import { UsersService } from '../users/users.service';
//Se encarga de las peticiones HTTP
@Controller('auth')
//Mi ruta seria localhost:3000/autH/login para ejecutar el post del login

export class AuthController {
  constructor(private readonly authService: AuthService, 
    private readonly mailerService: MailerService,
    private readonly usersService: UsersService, ){}
    //DECORADOR
    @Post('login')
    async login(@Body() userLoginDto : UserLoginDto){ //Creo mi userLoginDto para que reconozca el usuario
      return await this.authService.login(userLoginDto);
    }

    @Post('password')
  async sendTemporaryPassword(@Body('correo') correo: string) {
    // Generar una contraseña temporal (esto lo debes implementar según tus necesidades)
    const temporaryPassword = generateRandomPassword();

    const dataUser = {
      correo: correo,
      password: temporaryPassword,
      admin: false,
    };

    await this.usersService.create(dataUser); // Crea el usuario utilizando el UsersService

    // Enviar el correo electrónico con la contraseña temporal
    await this.mailerService.sendTemporaryPassword(correo, temporaryPassword);

    return { message: 'Contraseña temporal enviada correctamente' };
  }

  

  
}

function generateRandomPassword(length: number = 10): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomBytesCount = Math.ceil((length * 6) / 8); // Número de bytes necesarios para la longitud deseada

  const randomBytesBuffer = randomBytes(randomBytesCount);
  const passwordArray = [];

  for (let i = 0; i < randomBytesCount; i++) {
    const byte = randomBytesBuffer.readUInt8(i);
    const charIndex = byte % charset.length;
    passwordArray.push(charset[charIndex]);
  }

  return passwordArray.join('');
}
