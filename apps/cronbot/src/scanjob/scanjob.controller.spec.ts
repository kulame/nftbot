import { Test, TestingModule } from '@nestjs/testing';
import { ScanjobController } from './scanjob.controller';
import { ScanjobService } from './scanjob.service';

describe('ScanjobController', () => {
  let controller: ScanjobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScanjobController],
      providers: [ScanjobService],
    }).compile();

    controller = module.get<ScanjobController>(ScanjobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
