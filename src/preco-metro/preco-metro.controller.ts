import { Body, Controller, Get } from '@nestjs/common';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PrecoMetroQuadrado } from './dtos/preco-metro.response.dto'

@ApiTags('Preco do Metro Quadrado')
@Controller('api/preco/metroquadradro')
export class PrecoMetroQuadradoController {

  constructor(private precoMtQuadServ: PrecoMetroQuadradoService) {}

  @ApiOperation({ summary: 'Retorna valor do metro quadrado.' })
  @ApiResponse({ status: 200, description: 'Registro Encontrado', type: PrecoMetroQuadrado })
  @Get()
  async returnPrecoMetroQuadrado(): Promise <any> {
    return await this.precoMtQuadServ.getPrecoPorMetroQuadrado();
  }

}
