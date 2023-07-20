import { Test, TestingModule } from '@nestjs/testing';
import { FactorCargaController } from './factor-carga.controller';
import { FactorCargaService } from './factor-carga.service';

describe('FactorCargaController', () => {
  let controller: FactorCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorCargaController],
      providers: [FactorCargaService],
    }).compile();

    controller = module.get<FactorCargaController>(FactorCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
