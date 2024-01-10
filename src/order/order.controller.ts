import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { OrderService } from './order.service';
import { AddOrderDto } from './dto/add-order.dto';
import { AccessTokenGuard, GetCurrentUserId } from '@jwt_auth';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(AccessTokenGuard)
  @Post('add-order')
  createOrder(@Body() input: AddOrderDto, @GetCurrentUserId() user_id: string) {
    return this.orderService.createOrder(input, user_id);
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-order')
  getOrder(@GetCurrentUserId() user_id: string) {
    return this.orderService.getOrder(user_id);
  }
}
