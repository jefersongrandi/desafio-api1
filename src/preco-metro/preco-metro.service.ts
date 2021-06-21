import { Injectable } from '@nestjs/common';
import { PrecoMetroQuadrado } from './dtos/preco-metro.response.dto'

@Injectable()
export class PrecoMetroQuadradoService {
  //private readonly precometro2: PrecoMetro2;

  async getPrecoPorMetroQuadrado(): Promise<PrecoMetroQuadrado> {
    const obj: PrecoMetroQuadrado = { id: 1, preco: 490.90  };
    return obj;
  }

}
