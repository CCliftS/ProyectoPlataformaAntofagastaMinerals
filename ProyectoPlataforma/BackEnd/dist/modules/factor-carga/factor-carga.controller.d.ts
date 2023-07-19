import { FactorCargaService } from './factor-carga.service';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { FactorCarga } from 'src/entities/factor-carga.entity';
import { Rajo } from '../../entities/rajo.entity';
export declare class FactorCargaController {
    private readonly factorCargaService;
    constructor(factorCargaService: FactorCargaService);
    create(createFactorCargaDto: CreateFactorCargaDto): Promise<FactorCarga>;
    findAll(): Promise<typeof Rajo>;
    findOne(id: string): string;
    remove(id: string): string;
}
