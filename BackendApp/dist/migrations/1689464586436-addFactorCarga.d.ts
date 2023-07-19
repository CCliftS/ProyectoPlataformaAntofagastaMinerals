import { MigrationInterface, QueryRunner } from "typeorm";
import { FactorCargaService } from "src/modules/factor-carga/factor-carga.service";
export declare class AddFactorCarga1689464586436 implements MigrationInterface {
    private readonly factorCargaService;
    constructor(factorCargaService: FactorCargaService);
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
