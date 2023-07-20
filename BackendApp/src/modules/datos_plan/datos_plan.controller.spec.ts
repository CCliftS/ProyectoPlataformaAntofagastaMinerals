import { Test, TestingModule } from '@nestjs/testing';
import { DatosPlanController } from './datos_plan.controller';
import { DatosPlanService } from './datos_plan.service';

describe('DatosPlanController', () => {
  let controller: DatosPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosPlanController],
      providers: [DatosPlanService],
    }).compile();

    controller = module.get<DatosPlanController>(DatosPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
