import { CreateSoldierInput } from './create-soldier.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSoldierInput extends PartialType(CreateSoldierInput) {
  id: number;
}
