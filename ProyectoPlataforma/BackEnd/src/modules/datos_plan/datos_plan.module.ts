import { Module } from '@nestjs/common';
import { DatosPlanService } from './datos_plan.service';
import { DatosPlanController } from './datos_plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosPlan } from '../../entities/datos_plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosPlan])],
  controllers: [DatosPlanController],
  providers: [DatosPlanService],
  exports: [DatosPlanService]
})
export class DatosPlanModule {}
