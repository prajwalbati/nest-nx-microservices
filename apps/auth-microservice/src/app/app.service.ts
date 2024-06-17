import { Injectable } from '@nestjs/common';

import { CreateUserDto, User } from '@api-gateway/shared';

import { UserRepository } from './user.repository';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(newUser: CreateUserDto): User {
    return this.userRepository.save(newUser);
  }

  getUser(username: string): User | undefined {
    return this.userRepository.findOne(username);
  }
}
