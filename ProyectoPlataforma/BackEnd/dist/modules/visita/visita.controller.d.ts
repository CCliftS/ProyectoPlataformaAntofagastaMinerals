import { VisitaService } from './visita.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
export declare class VisitaController {
    private readonly visitaService;
    constructor(visitaService: VisitaService);
    create(createVisitaDto: CreateVisitaDto): Promise<import("../../entities/visita.entity").Visita>;
    findAll(): Promise<import("../../entities/visita.entity").Visita[]>;
    findOne(correo: string): Promise<string | import("../../entities/visita.entity").Visita>;
    update(correo: string, updateVisitaDto: UpdateVisitaDto): string;
    remove(correo: string): string;
}
