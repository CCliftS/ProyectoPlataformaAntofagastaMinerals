import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { createConnection } from 'typeorm';
import { FactorCargaService } from './modules/factor-carga/factor-carga.service';

async function bootstrap() {
  dotenv.config();
  await createConnection();
  const app = await NestFactory.create(AppModule);
  const factorCargaService = app.get(FactorCargaService);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
