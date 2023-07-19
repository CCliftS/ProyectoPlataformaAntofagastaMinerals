import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Module } from '@nestjs/common';
//OCUPARE EN REALIDAD EL CREATE Y EL FindOne
@Injectable()
export class UsersService {

  //Creo un repositorio user que hace la conexion a la base de datos
  //  
  constructor(//tiene todos sus metodos
    @InjectRepository(User) private  userRepository :Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.correo = createUserDto.correo;
    user.password = createUserDto.password;
    user.admin = createUserDto.admin
    //Se va a guardar el usuario de la base de datos
    return await this.userRepository.save(user)
  }

  async findAll() {
    return await this.userRepository.find();//find()->Retorna a todos
  }

  async findOne(correo: string) {
    const user = await this.userRepository.findOne(
      {
        where:{
          correo : correo
        }
      }
    );
    if(user){
      return user
    }
    return null//o una excepción
  }

  update(correo: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${correo} user`;
  }
}
