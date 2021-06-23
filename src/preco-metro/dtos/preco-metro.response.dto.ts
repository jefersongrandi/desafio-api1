  
import { ApiProperty } from '@nestjs/swagger';

export class PrecoMetroQuadradoResponseDTO {

  @ApiProperty({ example: 1, description: 'Código identificador do registro' })
  id: number;
  
  @ApiProperty({ example: 500.00, description: 'Preço do metro quadrado.' })
  preco: number;

}