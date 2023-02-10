/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductosService } from './productos/productos.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }), ProductModule,
    MongooseModule.forRoot('mongodb://localhost/juntas3')
  
  ],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
