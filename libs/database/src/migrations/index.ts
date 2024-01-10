import { CreateUser1704822041996 } from './1704822041996-createUser';
import { Orders1704829301441 } from './1704829301441-orders';
import { Updated1704864457843 } from './1704864457843-updated';

export const migrations = [
  CreateUser1704822041996,
  Orders1704829301441,
  Updated1704864457843,
];

export * from './1704822041996-createUser';
export * from './1704829301441-orders';
export * from './1704864457843-updated';
