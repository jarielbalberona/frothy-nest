import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @MessagePattern('createCar')
  create(@Payload() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @MessagePattern('findAllCars')
  findAll() {
    return this.carsService.findAll();
  }

  @MessagePattern('findOneCar')
  findOne(@Payload() id: number) {
    return this.carsService.findOne(id);
  }

  @MessagePattern('updateCar')
  update(@Payload() updateCarDto: UpdateCarDto) {
    return this.carsService.update(updateCarDto.id, updateCarDto);
  }

  @MessagePattern('removeCar')
  remove(@Payload() id: number) {
    return this.carsService.remove(id);
  }
}
