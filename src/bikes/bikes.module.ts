import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesResolver } from './bikes.resolver';

@Module({
  providers: [BikesResolver, BikesService]
})
export class BikesModule {}
