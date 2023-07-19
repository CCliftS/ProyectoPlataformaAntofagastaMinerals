import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLoginDto: UserLoginDto): Promise<{
        token: string;
        user: User;
        admin: boolean;
    }>;
}
