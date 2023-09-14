import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { SoldiersResolver } from './soldiers.resolver';

@Module({
  providers: [SoldiersResolver, SoldiersService]
})
export class SoldiersModule {}
