import {
  Controller,
  Get,
  Header,
  HttpCode,
  Inject,
  Param,
  Post,
  Query
} from "@nestjs/common";
import { UserService } from "./user.service";
import { Connection } from "./connection/connection";
import { MailService } from "./mail/mail.service";
import { UserRepository } from "./user-repository/user-repository";

@Controller("api/users")
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly connection: Connection,
    private readonly mailService: MailService,
    private readonly userRepository: UserRepository,
    @Inject("EmailService") private readonly emailService: MailService
  ) {}

  // or
  // @Inject()
  // private readonly userService: UserService;

  @Get("/connection")
  getConnection(): string {
    this.userRepository.save();
    this.mailService.send();
    this.emailService.send();
    return this.connection.getName();
  }

  @Post()
  post(): string {
    return "post users";
  }

  @Get("/sample")
  get(): string {
    return this.service.sayHello("sample");
  }

  @Get("/sample/:id")
  getDynamic(@Param("id") id: string): string {
    return `GET SAMPLE ${id}`;
  }

  @Get("/hello")
  sayHello(
    @Query("first_name") firstName: string,
    @Query("last_name") lastName: string
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  @Get("/sample/response")
  @Header("Content-Type", "application/json")
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: "Sample Response JSON"
    };
  }
}
