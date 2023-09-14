import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BikesService } from './bikes.service';
import { Bike } from './entities/bike.entity';
import { CreateBikeInput } from './dto/create-bike.input';
import { UpdateBikeInput } from './dto/update-bike.input';

@Resolver(() => Bike)
export class BikesResolver {
  constructor(private readonly bikesService: BikesService) {}

  @Mutation(() => Bike)
  createBike(@Args('createBikeInput') createBikeInput: CreateBikeInput) {
    return this.bikesService.create(createBikeInput);
  }

  @Query(() => [Bike], { name: 'bikes' })
  findAll() {
    return this.bikesService.findAll();
  }

  @Query(() => Bike, { name: 'bike' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bikesService.findOne(id);
  }

  @Mutation(() => Bike)
  updateBike(@Args('updateBikeInput') updateBikeInput: UpdateBikeInput) {
    return this.bikesService.update(updateBikeInput.id, updateBikeInput);
  }

  @Mutation(() => Bike)
  removeBike(@Args('id', { type: () => Int }) id: number) {
    return this.bikesService.remove(id);
  }
}
