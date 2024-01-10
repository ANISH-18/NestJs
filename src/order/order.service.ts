import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { AddOrderDto } from './dto/add-order.dto';
import { OrderRepsoitory } from '@database';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepsoitory) {}

  async createOrder(input: AddOrderDto, user_id: string) {
    try {
      const inputDataWithUserId = {
        ...input,
        user_id: user_id,
      };

      const order = await this.orderRepository.createOrder(inputDataWithUserId);

      // let order = await this.orderRepository.create(inputDataWithUserId);
      // order = await this.orderRepository.save(order);

      return {
        message: 'Order Added Successfully...',
        data: order,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOrder(user_id: string) {
    try {
      const getOrder = await this.orderRepository.findOrder(user_id);
      if (!getOrder || getOrder.length === 0) {
        throw new NotFoundException('Order Not Found');
      }

      return {
        message: 'Order Fetched Successfully...',
        data: getOrder,
      };
    } catch (error) {
      throw error;
    }
  }
}
