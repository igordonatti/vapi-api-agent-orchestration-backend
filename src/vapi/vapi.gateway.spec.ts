import { Test, TestingModule } from '@nestjs/testing';
import { VapiGateway } from './vapi.gateway';

describe('VapiGateway', () => {
  let gateway: VapiGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VapiGateway],
    }).compile();

    gateway = module.get<VapiGateway>(VapiGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
