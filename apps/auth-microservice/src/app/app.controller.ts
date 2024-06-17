import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserDto } from '@auth-microservice-nest/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user') // listens for the get_user message pattern
  handleGetUser(user: CreateUserDto) {
    return this.appService.getUser(user.username);
  }

  @MessagePattern('create_user') // listens for the create_user message pattern
  handleCreateUser(newUser: CreateUserDto) {
    return this.appService.createUser(newUser);
  }
}