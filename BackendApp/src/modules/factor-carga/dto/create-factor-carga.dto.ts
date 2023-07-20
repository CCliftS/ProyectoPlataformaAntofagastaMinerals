import { Rajo } from "../../../entities/rajo.entity";

export class CreateFactorCargaDto {
    fecha_inicio: Date;
    fecha_termino: Date;
    rajo: string;
    tonelaje: number;
}