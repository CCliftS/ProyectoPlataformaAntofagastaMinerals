"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFactorCarga1689464586436 = void 0;
const factor_carga_entity_1 = require("../entities/factor-carga.entity");
const axios_1 = require("axios");
class AddFactorCarga1689464586436 {
    constructor(factorCargaService) {
        this.factorCargaService = factorCargaService;
        this.name = 'AddFactorCarga1689464586436';
    }
    async up(queryRunner) {
        const dataFromFrontend = await axios_1.default.post('http://localhost:3001/auth/factor_carga').then(response => response.data);
        const nuevoFactorCarga = new factor_carga_entity_1.FactorCarga();
        nuevoFactorCarga.fecha_inicio = dataFromFrontend.fecha_inicio;
        nuevoFactorCarga.fecha_termino = dataFromFrontend.fecha_termino;
        nuevoFactorCarga.rajo = dataFromFrontend.rajo;
        nuevoFactorCarga.tonelaje = dataFromFrontend.tonelaje;
        await this.factorCargaService.create(nuevoFactorCarga);
        try {
            await queryRunner.manager.save(nuevoFactorCarga);
        }
        catch (error) {
            console.error('Error al guardar el factor de carga', error);
            throw error;
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("correo")`);
    }
}
exports.AddFactorCarga1689464586436 = AddFactorCarga1689464586436;
//# sourceMappingURL=1689464586436-addFactorCarga.js.map