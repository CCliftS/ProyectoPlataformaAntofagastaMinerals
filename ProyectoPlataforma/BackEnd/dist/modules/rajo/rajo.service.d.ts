import { CreateRajoDto } from './dto/create-rajo.dto';
import { Rajo } from './entities/rajo.entity';
import { Repository } from 'typeorm';
export declare class RajoService {
    private rajoRepository;
    constructor(rajoRepository: Repository<Rajo>);
    create(createRajoDto: CreateRajoDto): Promise<Rajo>;
    findAll(): Promise<Rajo[]>;
    findOne(nombre_rajo: string): Promise<Rajo>;
}
