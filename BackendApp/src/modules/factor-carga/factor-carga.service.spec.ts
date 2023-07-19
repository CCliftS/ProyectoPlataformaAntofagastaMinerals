import { Test, TestingModule } from '@nestjs/testing';
import { FactorCargaService } from './factor-carga.service';

describe('FactorCargaService', () => {
  let service: FactorCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorCargaService],
    }).compile();

    service = module.get<FactorCargaService>(FactorCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
