import { Length, IsNotEmpty } from 'class-validator';

export class SignUpUserDto {
  @IsNotEmpty({ message: 'Name Is Required' })
  name: string;

  @IsNotEmpty({ message: 'Phone Number is requried' })
  @Length(10, 10, { message: 'Phone number must be 10 digits long' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'Password is requried' })
  password: string;
}
