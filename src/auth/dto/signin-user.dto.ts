import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInUserDto {
  @IsNotEmpty({ message: 'Phone Number Is Required' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'Password is requried' })
  password: string;
}
