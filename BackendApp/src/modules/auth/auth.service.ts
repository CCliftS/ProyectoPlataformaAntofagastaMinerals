import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { UsersService } from '../users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
//async= Retorna y captura el registro
@Injectable()
export class AuthService {
    //El UserService es injectable
    constructor(private userService : UsersService,
        private jwtService : JwtService ){}
        
    async login(userLoginDto : UserLoginDto){
        //Validar si mi usuario existe
        const user =  await this.userService.findOne(userLoginDto.correo);
        if(!user)return null;//o una excepcion

        if(!user.validatePassword(userLoginDto.password)) return null;
        //El token se crea a partir de informacion del usuario
        
        const isAdmin = user.admin
        //console.log(isAdmin)

        const payload = user.getInfoToken();
        const token = this.jwtService.sign({...payload,admin:isAdmin});
        return{
            token: token,
            user : user,
            admin:isAdmin
        }
    }
}
