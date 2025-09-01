import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
} from "@nestjs/common";

@Controller("api/users")
export class UserController {
  @Post()
  post(): string {
    return "post users";
  }

  @Get("/sample")
  get(): string {
    return "get user 222";
  }

  @Get("/sample/:id")
  getDynamic(@Param("id") id: string): string {
    return `GET SAMPLE ${id}`;
  }

  @Get("/hello")
  sayHello(
    @Query("first_name") firstName: string,
    @Query("last_name") lastName: string,
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  @Get("/sample/response")
  @Header("Content-Type", "application/json")
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: "Sample Response JSON",
    };
  }
}
