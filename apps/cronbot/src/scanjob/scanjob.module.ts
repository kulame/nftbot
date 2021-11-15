import { EthereumModule } from '@app/ethereum';
import { Module } from '@nestjs/common';
import { ScanjobController } from './scanjob.controller';
import { ScanjobService } from './scanjob.service';

@Module({
  imports: [EthereumModule],
  controllers: [ScanjobController],
  providers: [ScanjobService],
})
export class ScanjobModule {}
