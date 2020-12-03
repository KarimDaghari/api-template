import fastify from "fastify";
import cors from "fastify-cors";
import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import db from "./mikro-orm.config";
import fastifyHelmet from "fastify-helmet";
import fastifyRateLimit from "fastify-rate-limit";

const app = fastify({
  logger: {
    prettyPrint: true
  }
});
const port = process.env.PORT || 4000;

async function bootstrap() {
  try {
    await MikroORM.init({
      metadataProvider: TsMorphMetadataProvider,
      ...db
    });

    app.register(cors);
    app.register(fastifyHelmet);
    app.register(fastifyRateLimit);

    app.listen(port, (_, address) => app.log.info(address));
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();
