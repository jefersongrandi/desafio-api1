  
import { ApiProperty } from '@nestjs/swagger';
import { PrecoMetroQuadradoInterface } from '../interfaces/preco-metro.interface'

export class PrecoMetroQuadrado implements PrecoMetroQuadradoInterface {

  @ApiProperty({ example: 1, description: 'Código identificador do registro' })
  id: number;
  
  @ApiProperty({ example: 500.00, description: 'Preço do metro quadrado.' })
  preco: number;

}