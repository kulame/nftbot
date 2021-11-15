import { Test, TestingModule } from '@nestjs/testing';
import { CronbotController } from './cronbot.controller';
import { CronbotService } from './cronbot.service';

describe('CronbotController', () => {
  let cronbotController: CronbotController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronbotController],
      providers: [CronbotService],
    }).compile();

    cronbotController = app.get<CronbotController>(CronbotController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronbotController.getHello()).toBe('Hello World!');
    });
  });
});
