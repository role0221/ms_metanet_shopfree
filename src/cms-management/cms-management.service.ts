import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'model/product.model';


@Injectable()
export class CmsManagementService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product,
    ) { }

    async findTest(): Promise<Product[]> {
        return await this.productRepository.findAll()
    }
}