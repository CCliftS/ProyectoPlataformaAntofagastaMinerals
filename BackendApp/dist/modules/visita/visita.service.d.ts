import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from '../../entities/visita.entity';
import { Repository } from 'typeorm';
export declare class VisitaService {
    private visitaRepository;
    constructor(visitaRepository: Repository<Visita>);
    create(createVisitaDto: CreateVisitaDto): Promise<Visita>;
    findAll(): Promise<Visita[]>;
    findOne(correo: string): Promise<Visita>;
    update(estado: boolean, correo: string, updateVisitaDto: UpdateVisitaDto): Promise<Visita>;
    remove(correo: string): string;
}
