import { ProductController } from './product.controller';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProviders]
})
export class ProductModule { }