import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrecoMetroQuadradoResponseDTO } from './dtos/preco-metro.response.dto'

const getPreco: any = () => {
  return new Promise ((resolve, reject): any => {
    resolve({ id: 1, preco: 490.90 });
  })
}

@Injectable()
export class PrecoMetroQuadradoService {

  private precoMetroQuadrado: PrecoMetroQuadradoResponseDTO;
  
  async getPrecoPorMetroQuadrado(): Promise<PrecoMetroQuadradoResponseDTO> {
    
    try {
      this.precoMetroQuadrado = await getPreco();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao recuperar valor do metro quadrado.'); 
    }
    return this.precoMetroQuadrado;
  }

}
