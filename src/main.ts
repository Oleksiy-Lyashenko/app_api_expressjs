import { App } from "./app";
import { LoggerService } from "./logger/logger.service";
import { RouterController } from "./router/router.controller";

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(logger, new RouterController(logger));
  await app.init();
};

bootstrap();