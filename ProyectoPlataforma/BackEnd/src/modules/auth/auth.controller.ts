import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
//Se encarga de las peticiones HTTP
@Controller('auth')
//Mi ruta seria localhost:3000/autH/login para ejecutar el post del login

export class AuthController {
  constructor(private readonly authService: AuthService){}
    //DECORADOR
    @Post('login')
    async login(@Body() userLoginDto : UserLoginDto){ //Creo mi userLoginDto para que reconozca el usuario
      return await this.authService.login(userLoginDto);
    }
}
