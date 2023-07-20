import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { UsersService } from '../users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userLoginDto: UserLoginDto): Promise<{
        token: string;
        user: User;
        admin: boolean;
    }>;
}
