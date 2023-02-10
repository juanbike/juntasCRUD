import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductosService } from './productos/productos.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/juntas3'),
  ],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
