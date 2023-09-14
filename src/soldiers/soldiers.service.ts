import { Injectable } from '@nestjs/common';
import { CreateSoldierInput } from './dto/create-soldier.input';
import { UpdateSoldierInput } from './dto/update-soldier.input';

@Injectable()
export class SoldiersService {
  create(createSoldierInput: CreateSoldierInput) {
    return 'This action adds a new soldier';
  }

  findAll() {
    return `This action returns all soldiers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldier`;
  }

  update(id: number, updateSoldierInput: UpdateSoldierInput) {
    return `This action updates a #${id} soldier`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldier`;
  }
}
