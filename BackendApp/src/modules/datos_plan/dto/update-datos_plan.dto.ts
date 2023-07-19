import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosPlanDto } from './create-datos_plan.dto';

export class UpdateDatosPlanDto extends PartialType(CreateDatosPlanDto) {}
