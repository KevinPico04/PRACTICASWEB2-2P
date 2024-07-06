import { Test, TestingModule } from '@nestjs/testing';
import { ControlDeIdiomaGateway } from './controlDeIdioma.gateway';

describe('ControlDeIdiomaGateway', () => {
  let gateway: ControlDeIdiomaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControlDeIdiomaGateway],
    }).compile();

    gateway = module.get<ControlDeIdiomaGateway>(ControlDeIdiomaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
