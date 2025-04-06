import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repositoty: Repository<UserEntity>,

  ) {}

  async findByEmail(email:string) {
    return this.repositoty.findOneBy({
      email,
    });
  }

async findById(id:number) {
  return this.repositoty.findOneBy({
    id,
  });
}

create (dto: CreateUserDto) {
  return this.repositoty.save(dto);
}


  
}
