import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const serverConfig = config.get('server');
  const port = serverConfig.port;

  await app.listen(port);
  Logger.log(`Application running on port ${port}`)
}
bootstrap();
