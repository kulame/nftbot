import { Controller, Get } from '@nestjs/common';
import { CronbotService } from './cronbot.service';

@Controller()
export class CronbotController {
  constructor(private readonly cronbotService: CronbotService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.cronbotService.getHello();
  }
}
