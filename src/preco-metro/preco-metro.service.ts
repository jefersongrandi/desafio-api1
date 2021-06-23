import { Injectable } from '@nestjs/common';
import { PrecoMetroQuadradoDTO } from './dtos/preco-metro.response.dto'

@Injectable()
export class PrecoMetroQuadradoService {
  //private readonly precometro2: PrecoMetro2;

  async getPrecoPorMetroQuadrado(): Promise<PrecoMetroQuadradoDTO> {
    const obj: PrecoMetroQuadradoDTO = { id: 1, preco: 490.90 };
    return obj;
  }

}
