import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export default {
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === "production" ? false : true,
  entitiesTs: ["./src/models/*.ts"],
  entities: ["./dist/models/*.js"]
} as Options;
