import { Test, TestingModule } from '@nestjs/testing';
import { BikesResolver } from './bikes.resolver';
import { BikesService } from './bikes.service';

describe('BikesResolver', () => {
  let resolver: BikesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikesResolver, BikesService],
    }).compile();

    resolver = module.get<BikesResolver>(BikesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
