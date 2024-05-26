import { FilterProductAttributes, Product, ProductAttributes } from 'model/product.model';
import { FilterProductDto } from './dto/filter-product.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product,
    ) { }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productRepository.create(createProductDto)
    }

    async findAllProduct({ STARTPAGE, PERPAGE, sortBy, sortType, search, category }: FilterProductDto): Promise<{ rows: Product[], count: number }> {
        return await this.productRepository.findAndCountAll({
            offset: STARTPAGE,
            limit: PERPAGE,
            where: {
                ...(category && { category }),
                ...(search && {
                    [Op.or]: [{ productName: { [Op.iLike]: `%${search}%` } },]
                }),
            },
            attributes: FilterProductAttributes,
            ...(sortBy && sortType && { order: [[sortBy, sortType]] })
        })
    }

    async findProductDetail(productId: number): Promise<Product> {
        return await this.productRepository.findOne({
            attributes: ProductAttributes,
            where: { productId }
        })
    }

    async updateProduct(updateProductDto: UpdateProductDto, productId: number) {
        return await this.productRepository.update(updateProductDto, { where: { productId } });
    }
}