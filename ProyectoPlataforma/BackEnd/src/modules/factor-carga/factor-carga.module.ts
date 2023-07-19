import { Module } from '@nestjs/common';
import { FactorCargaService } from './factor-carga.service';
import { FactorCargaController } from './factor-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactorCarga } from "../../entities/factor-carga.entity";

@Module({
  //importar mi base datos
  imports : [
      TypeOrmModule.forFeature([FactorCarga])
  ],
  controllers: [FactorCargaController],
  providers: [FactorCargaService],
  exports : [FactorCargaService]
})
export class FactorCargaModule {}
