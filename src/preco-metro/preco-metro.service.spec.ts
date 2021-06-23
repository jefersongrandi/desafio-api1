import { Test, TestingModule } from '@nestjs/testing';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { PrecoMetroQuadradoResponseDTO } from './dtos/preco-metro.response.dto';

describe('PrecoMetro2Service', () => {

  let service: PrecoMetroQuadradoService;

  const preco: PrecoMetroQuadradoResponseDTO  = { id: 1, preco: 490.90 };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecoMetroQuadradoService]
    }).compile();

    service = module.get<PrecoMetroQuadradoService>(PrecoMetroQuadradoService); 

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('ter sido chamando função getPreco() 1 vez', async () => {
    service.getPrecoPorMetroQuadrado = jest.fn(service.getPrecoPorMetroQuadrado);
    await service.getPrecoPorMetroQuadrado();
    expect(service.getPrecoPorMetroQuadrado).toHaveBeenCalledTimes(1);
  }) 

  it('ter tido como retorno um PrecoMetroQuadradoResponseDTO', async () => {
    const result = await service.getPrecoPorMetroQuadrado();
    expect(result).toMatchObject(preco);
  }) 

});
