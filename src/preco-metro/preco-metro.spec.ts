import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { PrecoMetroModule } from './preco-metro.module';
import { PrecoMetroQuadradoService } from './preco-metro.service';
import { INestApplication } from '@nestjs/common';

describe('PrecoMetro', () => {
  let service: PrecoMetroQuadradoService;
  let app: INestApplication;
  let mockService = { getPrecoPorMetroQuadrado: () => {} };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [PrecoMetroModule],
    })
    .overrideProvider(PrecoMetroQuadradoService)
    .useValue(mockService)
    .compile();

    app = moduleRef.createNestApplication();
    await app.init();

  });

  it(`/GET preco metro quadrado`, () => {

    return request(app.getHttpServer())
      .get('/api/preco/metroquadrado')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });

});
