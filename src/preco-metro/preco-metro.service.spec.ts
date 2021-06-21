import { Test, TestingModule } from '@nestjs/testing';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { PrecoMetroQuadrado } from './entities/preco-metro.entity'; 

describe('PrecoMetro2Service', () => {

  let service: PrecoMetroQuadradoService;
  let precoMetroQuadrado: PrecoMetroQuadrado = new PrecoMetroQuadrado();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecoMetroQuadradoService],
    }).compile();

    service = module.get<PrecoMetroQuadradoService>(PrecoMetroQuadradoService); 

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('call getPrecoPorMetroQuadrado()', async () => {
    await expect(service.getPrecoPorMetroQuadrado()).toMatchObject({});
  })

});
