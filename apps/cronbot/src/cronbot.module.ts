import { Module } from '@nestjs/common';
import { CronbotController } from './cronbot.controller';
import { CronbotService } from './cronbot.service';
import { ScanjobModule } from './scanjob/scanjob.module';

@Module({
  imports: [ScanjobModule],
  controllers: [CronbotController],
  providers: [CronbotService],
})
export class CronbotModule {}
