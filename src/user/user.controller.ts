import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  // or
  // @Inject()
  // private readonly userService: UserService;

  @Post()
  post(): string {
    return 'post users';
  }

  @Get('/sample')
  get(): string {
    return this.service.sayHello('sample');
  }

  @Get('/sample/:id')
  getDynamic(@Param('id') id: string): string {
    return `GET SAMPLE ${id}`;
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  @Get('/sample/response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Sample Response JSON',
    };
  }
}
