import { Test, TestingModule } from '@nestjs/testing';
import { UserControllController } from './user-controll.controller';

describe('UserControllController', () => {
  let controller: UserControllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserControllController],
    }).compile();

    controller = module.get<UserControllController>(UserControllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
