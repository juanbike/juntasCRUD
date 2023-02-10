import { CreateJuntasDTO } from './dto/product.dto';

import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createJuntasDTO: CreateJuntasDTO) {
    const product = await this.productService.createProduct(createJuntasDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Junta Creada exitosamente', product });
  }

  // Get Products /product
  // @Get('/list')
  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  // GET single product: /product/5c9d46100e2e5c44c444b2d1

  /*
    Consulta utilizando un parametro @Param(productID)
    http://localhost:5000/product/633070ff79c006ce924e3864
  */

  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    console.log(product);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  /*
  Consulta usando el decorador @Query(productID)
http://localhost:5000/product/delete?productID=632df7abf9a13817a2d63290
  */

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      productDeleted,
    });
  }

  // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
  /*
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createJuntasDTO: CreateJuntasDTO,
    @Query('productID') productID,
  ) {
    const updatedProduct = await this.productService.updateProduct(
      productID,
      createJuntasDTO,
    );
    if (!updatedProduct) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      updatedProduct,
    });
  }
  */

  //http://localhost:5000/product/update/6330870a42a67eb98b695ef2
  @Put('/update/:productID')
  async updateProduct(
    @Res() res,
    @Body() createJuntasDTO: CreateJuntasDTO,
    @Param('productID') productID,
  ) {
    const updatedProduct = await this.productService.updateProduct(
      productID,
      createJuntasDTO,
    );
    if (!updatedProduct) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      updatedProduct,
    });
  }
} //
