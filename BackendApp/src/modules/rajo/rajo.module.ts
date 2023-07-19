import { Module } from '@nestjs/common';
import { RajoService } from './rajo.service';
import { RajoController } from './rajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rajo } from '../../entities/rajo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Rajo])],
  controllers: [RajoController],
  providers: [RajoService],
  exports:[RajoService]
})
export class RajoModule {}
