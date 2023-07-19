//Las migraciones es guardan en la base de datos
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { MigrationInterface, QueryRunner } from "typeorm";
import axios from "axios";
import { User } from "../entities/user.entity";
import { UsersService } from "src/modules/users/users.service";
import { userInfo } from "os";
export class Init1686343028071 implements MigrationInterface {
    constructor(private readonly userService : UsersService){}
    
    name = 'Init1686343028071'

    public async up(queryRunner: QueryRunner): Promise<void> {

        const infoDataFrontend: CreateUserDto= await axios.post('').then(response =>response.data);
        const newUser = new User();
        newUser.correo = infoDataFrontend.correo;
        newUser.password = infoDataFrontend.password;
        newUser.admin = infoDataFrontend.admin;
        await this.userService.create(newUser);
        try {
            await queryRunner.manager.save(newUser);
          } catch (error) {
            console.error('Error al guardar el nuevo usuario', error);
            throw error; // Lanzar el error para que se maneje a nivel superior
          }
        /*
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_pkey"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac" PRIMARY KEY ("correo")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("correo")`);
    }

}
