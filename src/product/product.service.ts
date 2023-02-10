//import { Product } from './../../dist/product/interfaces/product.interface.d';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateJuntasDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(productID: string): Promise<Product> {
    const product = await this.productModel.findById(productID);
    return product;
  }

  async createProduct(createProduct: CreateJuntasDTO): Promise<Product> {
    const product = new this.productModel(createProduct);
    await product.save();
    return product;
  }

  async deleteProduct(productID: string): Promise<Product> {
    const deleteProduct = await this.productModel.findByIdAndDelete(productID);
    return deleteProduct;
  }

  async updateProduct(
    productID: string,
    createProductDTO: CreateJuntasDTO,
  ): Promise<Product> {
    const updateProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updateProduct;
  }
}
