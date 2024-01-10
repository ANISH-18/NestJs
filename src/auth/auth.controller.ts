import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/signup-user.dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { AccessTokenGuard, GetCurrentUser, GetCurrentUserId } from '@jwt_auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() input: SignUpUserDto) {
    return this.authService.signUp(input);
  }

  @Post('signin')
  signIn(@Body() input: SignInUserDto) {
    return this.authService.signIn(input);
  }
}
