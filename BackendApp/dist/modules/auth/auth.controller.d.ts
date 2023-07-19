import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { MailerService } from '../../mailer/mailer.service';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly mailerService;
    private readonly usersService;
    constructor(authService: AuthService, mailerService: MailerService, usersService: UsersService);
    login(userLoginDto: UserLoginDto): Promise<{
        token: string;
        user: User;
        admin: boolean;
    }>;
    sendTemporaryPassword(correo: string): Promise<{
        message: string;
    }>;
}
