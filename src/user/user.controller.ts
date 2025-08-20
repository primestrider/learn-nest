import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Post()
  post(): string {
    return 'post users';
  }

  @Get('/sample')
  get(): string {
    return 'get user 222';
  }
}
