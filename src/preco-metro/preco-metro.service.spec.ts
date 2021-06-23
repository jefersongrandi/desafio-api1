import { Test, TestingModule } from '@nestjs/testing';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { PrecoMetroQuadradoDTO } from './dtos/preco-metro.response.dto';

describe('PrecoMetro2Service', () => {

  let service: PrecoMetroQuadradoService;
  //let precoMetroQuadrado: PrecoMetroQuadrado = new PrecoMetroQuadrado();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecoMetroQuadradoService],
    }).compile();

    service = module.get<PrecoMetroQuadradoService>(PrecoMetroQuadradoService); 

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('objeto de retorno getPrecoPorMetroQuadrado() ser um PrecoMetroQuadradoDTO', async () => {
    const preco: PrecoMetroQuadradoDTO  = { id: 1, preco: 490.90 };
    const result = await service.getPrecoPorMetroQuadrado();
    expect(result).toMatchObject(preco);
  }) 

});
