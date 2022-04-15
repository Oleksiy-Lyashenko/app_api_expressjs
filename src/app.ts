import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { RouterController } from './router/router.controller';

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;
  routerController: RouterController;

  constructor(
    logger: LoggerService,
    routerController: RouterController,
  ) {
    this.app = express(); 
    this.port = 8000;
    this.logger = logger;
    this.routerController = routerController;
  }

  useRoutes() {
    this.app.use('/router', this.routerController.router);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log('Сервер запущен');
  }
}