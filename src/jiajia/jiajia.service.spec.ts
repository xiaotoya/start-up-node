import { Test, TestingModule } from '@nestjs/testing';
import { JiajiaService } from './jiajia.service';

describe('JiajiaService', () => {
  let service: JiajiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JiajiaService],
    }).compile();

    service = module.get<JiajiaService>(JiajiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
