/* eslint-disable prettier/prettier */
import { ConfigModule } from '@nestjs/config';
import { config } from './config/configuration';
import { Module } from '@nestjs/common';
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
    })
  
  ],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
