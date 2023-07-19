import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from '../../entities/visita.entity';
import { Repository } from 'typeorm';
export declare class VisitaService {
    private visitaRepository;
    constructor(visitaRepository: Repository<Visita>);
    create(createVisitaDto: CreateVisitaDto): Promise<Visita>;
    findAll(): Promise<Visita[]>;
    findOne(correo: string): Promise<string | Visita>;
    update(correo: string, updateVisitaDto: UpdateVisitaDto): string;
    remove(correo: string): string;
}
