import { Module } from '@nestjs/common';
import { PrecoMetroModule } from './preco-metro/preco-metro.module';

@Module({
  imports: [PrecoMetroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
