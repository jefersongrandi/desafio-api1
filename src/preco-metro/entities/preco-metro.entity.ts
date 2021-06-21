  
import { ApiProperty } from '@nestjs/swagger';
import { PrecoMetroQuadradoInterface } from '../interfaces/preco-metro.interface'

export class PrecoMetroQuadrado implements PrecoMetroQuadradoInterface {
  id: number;
  preco: number;
}