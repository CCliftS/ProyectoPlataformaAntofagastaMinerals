import { Test, TestingModule } from '@nestjs/testing';
import { DatosPlanService } from './datos_plan.service';

describe('DatosPlanService', () => {
  let service: DatosPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosPlanService],
    }).compile();

    service = module.get<DatosPlanService>(DatosPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
