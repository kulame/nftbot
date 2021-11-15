import { Injectable } from '@nestjs/common';

@Injectable()
export class CronbotService {
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
