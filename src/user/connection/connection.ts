import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

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

export function createConnection(configService: ConfigService): Connection {
  if (configService.get("DATABASE") == "mysql") {
    return new MySqlConnection();
  } else {
    return new MongoDbConnection();
  }
}
