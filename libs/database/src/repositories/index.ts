import { UserRepository } from './user.repository';
import { OrderRepsoitory } from './order.repository';
export const repositories = [UserRepository, OrderRepsoitory];

export * from './order.repository';
export * from './user.repository';
