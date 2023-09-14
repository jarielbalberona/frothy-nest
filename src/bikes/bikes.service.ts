import { Injectable } from '@nestjs/common';
import { CreateBikeInput } from './dto/create-bike.input';
import { UpdateBikeInput } from './dto/update-bike.input';

@Injectable()
export class BikesService {
  create(createBikeInput: CreateBikeInput) {
    return 'This action adds a new bike';
  }

  findAll() {
    return `This action returns all bikes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bike`;
  }

  update(id: number, updateBikeInput: UpdateBikeInput) {
    return `This action updates a #${id} bike`;
  }

  remove(id: number) {
    return `This action removes a #${id} bike`;
  }
}
