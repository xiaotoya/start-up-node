import { Test, TestingModule } from '@nestjs/testing';
import { JiajiaHobbyService } from './jiajia-hobby.service';

describe('JiajiaHobbyService', () => {
  let service: JiajiaHobbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JiajiaHobbyService],
    }).compile();

    service = module.get<JiajiaHobbyService>(JiajiaHobbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
