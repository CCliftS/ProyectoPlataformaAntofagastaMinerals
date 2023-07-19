import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { FactorCargaModule } from '../factor-carga/factor-carga.module';
//importo mis modulos
@Module({
  imports: [UsersModule,
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions:{expiresIn :'1d'}
  }),
  FactorCargaModule,
],//Voy a ocupar todo lo que provee userModule
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
