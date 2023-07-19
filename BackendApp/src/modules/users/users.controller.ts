import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//VIENDOLO DESDE LA PERPESCTIVA DE ADMINISTRADOR
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/añadirInvitado')
  async create(@Body() createUserDto: CreateUserDto) {
    const crearUser = await this.usersService.create(createUserDto);
    return crearUser;
  }

  @Get('allusers')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':correo')
  findOne(@Param('correo') correo: string) {
    return this.usersService.findOne(correo);
  }
  
  
}
