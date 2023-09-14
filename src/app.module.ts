import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { FishesModule } from './fishes/fishes.module';
import { BikesModule } from './bikes/bikes.module';
import { SoldiersModule } from './soldiers/soldiers.module';
import { CarsModule } from './cars/cars.module';
import { ShoesModule } from './shoes/shoes.module';

@Module({
  imports: [CatsModule, FishesModule, BikesModule, SoldiersModule, CarsModule, ShoesModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
