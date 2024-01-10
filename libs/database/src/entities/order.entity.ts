import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'user_id',
    nullable: true,
  })
  user_id: string;

  @Column({
    type: 'varchar',
    name: 'order_name',
    nullable: true,
  })
  orderName: string;

  @Column({
    type: 'varchar',
    name: 'sub_total',
    nullable: true,
  })
  subTotal: string;

  @Column({
    type: 'varchar',
    name: 'phone_number',
    nullable: true,
  })
  phoneNumber: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  public updatedAt!: Date;
}
