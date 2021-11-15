import { NestFactory } from '@nestjs/core';
import { CronbotModule } from './cronbot.module';
import { ScanjobModule } from './scanjob/scanjob.module';
import { ScanjobService } from './scanjob/scanjob.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CronbotModule);
  const service = app.select(ScanjobModule).get(ScanjobService);
  await service.getRecentBlock();
}
bootstrap();
