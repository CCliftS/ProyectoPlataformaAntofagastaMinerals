import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RajoService } from './rajo.service';
import { CreateRajoDto } from './dto/create-rajo.dto';
import { UpdateRajoDto } from './dto/update-rajo.dto';

@Controller('rajo')
export class RajoController {
  constructor(private readonly rajoService: RajoService) {}

  @Post()
  create(@Body() createRajoDto: CreateRajoDto) {
    return this.rajoService.create(createRajoDto);
  }

  @Get('allrajos')
  async findAll() {
    return await this.rajoService.findAll();
  }

  @Get(':nombre_rajo')
  findOne(@Param('nombre_rajo') nombre_rajo: string) {
    return this.rajoService.findOne(nombre_rajo);
  }

 
}
