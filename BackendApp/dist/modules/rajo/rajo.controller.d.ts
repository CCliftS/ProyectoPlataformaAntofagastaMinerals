import { RajoService } from './rajo.service';
import { CreateRajoDto } from './dto/create-rajo.dto';
export declare class RajoController {
    private readonly rajoService;
    constructor(rajoService: RajoService);
    create(createRajoDto: CreateRajoDto): Promise<import("./entities/rajo.entity").Rajo>;
    findAll(): Promise<import("./entities/rajo.entity").Rajo[]>;
    findOne(nombre_rajo: string): Promise<import("./entities/rajo.entity").Rajo>;
}
