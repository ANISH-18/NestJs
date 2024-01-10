import { Length, IsNotEmpty } from 'class-validator';

export class AddOrderDto {
  @IsNotEmpty({ message: 'Order Name Is Required' })
  orderName: string;

  @IsNotEmpty({ message: 'Sub Total Is Required' })
  subTotal: string;

  @IsNotEmpty({ message: 'Phone Number is requried' })
  @Length(10, 10, { message: 'Phone number must be 10 digits long' })
  phoneNumber: string;
}
