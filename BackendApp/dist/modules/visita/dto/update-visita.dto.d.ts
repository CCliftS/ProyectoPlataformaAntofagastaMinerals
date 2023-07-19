import { CreateVisitaDto } from './create-visita.dto';
declare const UpdateVisitaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVisitaDto>>;
export declare class UpdateVisitaDto extends UpdateVisitaDto_base {
    estado: boolean;
}
export {};
