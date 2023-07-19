import { PartialType } from '@nestjs/mapped-types';
import { CreateFactorCargaDto } from './create-factor-carga.dto';

export class UpdateFactorCargaDto extends PartialType(CreateFactorCargaDto) {}
