import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import {
  Connection,
  MongoDbConnection,
  MySqlConnection
} from "./connection/connection";
import { mailService, MailService } from "./mail/mail.service";
import {
  createUserRepository,
  UserRepository
} from "./user-repository/user-repository";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE == "mysql" ? MySqlConnection : MongoDbConnection
    },
    {
      provide: MailService,
      useValue: { mailService }
    },
    {
      provide: UserRepository,
      useFactory: createUserRepository,
      inject: [Connection]
    },
    {
      provide: "EmailService",
      useExisting: MailService
    }
  ]
})
export class UserModule {}
