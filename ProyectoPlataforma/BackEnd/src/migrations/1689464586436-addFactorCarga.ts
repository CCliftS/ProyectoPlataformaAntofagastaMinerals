import { FactorCarga } from "../entities/factor-carga.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { FactorCargaService } from "src/modules/factor-carga/factor-carga.service";
import { CreateFactorCargaDto } from "../modules/factor-carga/dto/create-factor-carga.dto";
import axios from "axios";
import * as dotenv from 'dotenv'
export class AddFactorCarga1689464586436 implements MigrationInterface {
    constructor(private readonly factorCargaService: FactorCargaService) {
    }
    name = 'AddFactorCarga1689464586436'

    public async up(queryRunner: QueryRunner): Promise<void> {

        const dataFromFrontend: CreateFactorCargaDto = await axios.post('http://localhost:3001/auth/factor_carga').then(response => response.data);
        const nuevoFactorCarga = new FactorCarga();
        nuevoFactorCarga.fecha_inicio = dataFromFrontend.fecha_inicio;
        nuevoFactorCarga.fecha_termino = dataFromFrontend.fecha_termino;
        nuevoFactorCarga.rajo = dataFromFrontend.rajo;
        nuevoFactorCarga.tonelaje = dataFromFrontend.tonelaje;
        await this.factorCargaService.create(nuevoFactorCarga);
    
        try {
          await queryRunner.manager.save(nuevoFactorCarga);
        } catch (error) {
          console.error('Error al guardar el factor de carga', error);
          throw error; // Lanzar el error para que se maneje a nivel superior
        }
        
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
