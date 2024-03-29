import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'name',
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'phone_number',
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    name: 'password',
    nullable: false,
  })
  password: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  public updatedAt!: Date;
}
