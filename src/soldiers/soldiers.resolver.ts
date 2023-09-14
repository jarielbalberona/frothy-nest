import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SoldiersService } from './soldiers.service';
import { CreateSoldierInput } from './dto/create-soldier.input';
import { UpdateSoldierInput } from './dto/update-soldier.input';

@Resolver('Soldier')
export class SoldiersResolver {
  constructor(private readonly soldiersService: SoldiersService) {}

  @Mutation('createSoldier')
  create(@Args('createSoldierInput') createSoldierInput: CreateSoldierInput) {
    return this.soldiersService.create(createSoldierInput);
  }

  @Query('soldiers')
  findAll() {
    return this.soldiersService.findAll();
  }

  @Query('soldier')
  findOne(@Args('id') id: number) {
    return this.soldiersService.findOne(id);
  }

  @Mutation('updateSoldier')
  update(@Args('updateSoldierInput') updateSoldierInput: UpdateSoldierInput) {
    return this.soldiersService.update(updateSoldierInput.id, updateSoldierInput);
  }

  @Mutation('removeSoldier')
  remove(@Args('id') id: number) {
    return this.soldiersService.remove(id);
  }
}
