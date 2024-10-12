import { Test, TestingModule } from '@nestjs/testing';
import { PairingService } from './pairing.service';

describe('PairingService', () => {
  let service: PairingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PairingService],
    }).compile();

    service = module.get<PairingService>(PairingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
