import { Test, TestingModule } from '@nestjs/testing';
import { SoldiersResolver } from './soldiers.resolver';
import { SoldiersService } from './soldiers.service';

describe('SoldiersResolver', () => {
  let resolver: SoldiersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldiersResolver, SoldiersService],
    }).compile();

    resolver = module.get<SoldiersResolver>(SoldiersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
