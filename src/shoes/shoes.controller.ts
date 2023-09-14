import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';

@Controller()
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}

  @MessagePattern('createShoe')
  create(@Payload() createShoeDto: CreateShoeDto) {
    return this.shoesService.create(createShoeDto);
  }

  @MessagePattern('findAllShoes')
  findAll() {
    return this.shoesService.findAll();
  }

  @MessagePattern('findOneShoe')
  findOne(@Payload() id: number) {
    return this.shoesService.findOne(id);
  }

  @MessagePattern('updateShoe')
  update(@Payload() updateShoeDto: UpdateShoeDto) {
    return this.shoesService.update(updateShoeDto.id, updateShoeDto);
  }

  @MessagePattern('removeShoe')
  remove(@Payload() id: number) {
    return this.shoesService.remove(id);
  }
}
