import { UserRepository } from '@database/repositories/user.repository';
import {
  ConflictException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SignUpUserDto } from './dto/signup-user.dto';
import { AuthHelper } from '@helpers';
import { SignInUserDto } from './dto/signin-user.dto';
import { JwtAuthService } from '@jwt_auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authHelper: AuthHelper,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  async signUp(input: SignUpUserDto) {
    try {
      const userInDb = await this.userRepository.findByPhone(input.phoneNumber);

      if (userInDb) {
        throw new ConflictException('User already exists');
      }

      input.password = await this.authHelper.encodePassword(input.password);

      const User = await this.userRepository.createUser(input);

      // let user = await this.userRepository.create(input);
      // user = await this.userRepository.save(user);

      return {
        message: 'User Registered Successfully...',
        data: User,
      };
    } catch (error) {
      throw error;
    }
  }

  async signIn(input: SignInUserDto) {
    try {
      const user = await this.userRepository.findByPhone(input.phoneNumber);

      if (!user) {
        throw new NotFoundException('Invalid username or password');
      }

      const isPasswordMatches = await this.authHelper.isPasswordValid(
        input.password,
        user.password,
      );

      if (!isPasswordMatches) {
        throw new ForbiddenException('Invalid user name or password');
      }

      const accessToken = await this.jwtAuthService.generateAccessToken({
        userId: user.id,
        phoneNumber: user.phoneNumber,
      });

      return {
        message: 'Signed in successfully',
        data: {
          accessToken,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
