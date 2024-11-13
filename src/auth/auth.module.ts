import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule, 
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1 days' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
