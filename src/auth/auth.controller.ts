import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';

export interface SignInDto {
    name: string;
    password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authSvc: AuthService) {}
    @Post()
    @Public()
    login(@Body() loginDto: SignInDto) {
        return this.authSvc.signIn(loginDto);
    }
}
