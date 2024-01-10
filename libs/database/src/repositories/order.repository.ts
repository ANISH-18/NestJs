import { OrderEntity } from '@database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class OrderRepsoitory extends Repository<OrderEntity> {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {
    super(
      orderRepository.target,
      orderRepository.manager,
      orderRepository.queryRunner,
    );
  }

  async createOrder(input: object) {
    try {
      let order = await this.orderRepository.create(input);
      order = await this.orderRepository.save(order);

      return order;
    } catch (error) {
      throw error;
    }
  }

  async findOrder(user_id: string) {
    return this.orderRepository.findBy({ user_id });
  }
}
