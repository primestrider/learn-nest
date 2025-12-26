import { Injectable } from "@nestjs/common";

@Injectable()
export class Connection {
  getName(): string {
    return "";
  }
}

@Injectable()
export class MySqlConnection extends Connection {
  getName(): string {
    return "MySQL";
  }
}

@Injectable()
export class MongoDbConnection extends Connection {
  getName(): string {
    return "MongoDb";
  }
}
