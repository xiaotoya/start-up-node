import { Test, TestingModule } from '@nestjs/testing';
import { JiajiaHobbyController } from './jiajia-hobby.controller';

describe('JiajiaHobbyController', () => {
  let controller: JiajiaHobbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JiajiaHobbyController],
    }).compile();

    controller = module.get<JiajiaHobbyController>(JiajiaHobbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
