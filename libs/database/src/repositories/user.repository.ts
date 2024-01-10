import { UserEntity } from '@database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInUserDto } from 'src/auth/dto/signin-user.dto';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async createUser(input: SignInUserDto) {
    let user = await this.userRepository.create(input);
    user = await this.userRepository.save(user);
    return user;
  }

  async findByPhone(phoneNumber: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ phoneNumber });
  }
}
