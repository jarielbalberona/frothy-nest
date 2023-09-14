import { CreateBikeInput } from './create-bike.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBikeInput extends PartialType(CreateBikeInput) {
  @Field(() => Int)
  id: number;
}
