import { Module } from '@nestjs/common';
import { PrecoMetroQuadradoController } from './preco-metro.controller';
import { PrecoMetroQuadradoService } from './preco-metro.service';

@Module({
  controllers: [PrecoMetroQuadradoController],
  providers: [PrecoMetroQuadradoService]
})
export class PrecoMetroModule {}
