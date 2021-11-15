import { Test, TestingModule } from '@nestjs/testing';
import { ScanjobService } from './scanjob.service';

describe('ScanjobService', () => {
  let service: ScanjobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScanjobService],
    }).compile();

    service = module.get<ScanjobService>(ScanjobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
