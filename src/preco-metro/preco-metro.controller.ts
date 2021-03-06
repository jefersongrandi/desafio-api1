import { Body, Controller, Get } from '@nestjs/common';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PrecoMetroQuadradoResponseDTO } from './dtos/preco-metro.response.dto'

@ApiTags('Preco do Metro Quadrado')
@Controller('api/preco/metroquadrado')
export class PrecoMetroQuadradoController {

  constructor(private precoMtQuadServ: PrecoMetroQuadradoService) {}

  @ApiOperation({ summary: 'Retorna valor do metro quadrado.' })
  @ApiResponse({ status: 200, description: 'Registro Encontrado', type: PrecoMetroQuadradoResponseDTO })
  @Get()
  async returnPrecoMetroQuadrado(): Promise<PrecoMetroQuadradoResponseDTO> {
    return await this.precoMtQuadServ.getPrecoPorMetroQuadrado();
  }

}
