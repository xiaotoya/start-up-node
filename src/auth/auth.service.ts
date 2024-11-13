import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/services/user.service';
import { SignInDto } from './auth.controller';

@Injectable()
export class AuthService {
    constructor(
        private readonly userSvc: UserService,
        private readonly jwtSvc: JwtService
    ) {}

    async signIn(signInDto: SignInDto): Promise<any> {
        const user = await this.userSvc.findUser(signInDto.name);
        if (user?.password !== signInDto.password) {
          throw new UnauthorizedException();
        }
        const payload = {sub: user.id, username: signInDto.name};
        return {
            access_token: await this.jwtSvc.signAsync(payload)
        };
    }
}
