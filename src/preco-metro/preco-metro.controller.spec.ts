import { Test, TestingModule } from '@nestjs/testing';
import { PrecoMetroQuadradoController } from './preco-metro.controller';
import { PrecoMetroQuadradoService } from './preco-metro.service';

describe('PrecoMetro2Controller', () => {
  let controller: PrecoMetroQuadradoController;
  let service: PrecoMetroQuadradoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecoMetroQuadradoController],
      providers: [PrecoMetroQuadradoService]
    }).compile();

    controller = module.get<PrecoMetroQuadradoController>(PrecoMetroQuadradoController);
    service = module.get<PrecoMetroQuadradoService>(PrecoMetroQuadradoService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('call get getPrecoPorMetroQuadrado() do service', async () => {
    service.getPrecoPorMetroQuadrado = jest.fn(service.getPrecoPorMetroQuadrado);
    await controller.returnPrecoMetroQuadrado();
    expect(service.getPrecoPorMetroQuadrado).toHaveBeenCalledTimes(1);
  })

});
