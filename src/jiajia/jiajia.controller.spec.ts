import { Test, TestingModule } from '@nestjs/testing';
import { JiajiaController } from './jiajia.controller';
import { JiajiaService } from './jiajia.service';

describe('JiajiaController', () => {
  let controller: JiajiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JiajiaController],
      providers: [JiajiaService],
    }).compile();

    controller = module.get<JiajiaController>(JiajiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
