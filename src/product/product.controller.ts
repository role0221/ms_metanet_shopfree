
import { BadRequestException, Controller, Get, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { FastifyReply } from 'fastify';

import { BodyWithCreatedBy } from '@/decorator/created-by.decorator';
import { BodyWithUpdatedBy } from '@/decorator/updated-by.decorator';
import { QueryPage } from '@/decorator/pagination.decorator';

import { FilterProductDto } from './dto/filter-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product.dto';
import { MSG_PRODUCT } from './product.schema';

@ApiBearerAuth()
@ApiTags(`product`)
@Controller(`product`)
// @ApiHeaders([{ name: 'hospCode', required: true }, { name: 'username', required: true }, { name: 'provinceCode', required: true }, { name: 'userCode', required: true },])
export class ProductController {
    constructor(readonly productService: ProductService) { }

    @Post()
    @ApiOperation({ summary: `Create Product` })
    @ApiOkResponse({ type: String })
    @ApiBody({ type: CreateProductDto })
    async createProduct(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto, 
        @BodyWithCreatedBy() createProductDto: CreateProductDto) {
        const hasCreate = await this.productService.createProduct(createProductDto)
        if (!hasCreate) throw new BadRequestException(MSG_PRODUCT.INVALID_CREATED)

        return res.send(hasCreate.productId)
    }


    @Get()
    @ApiOkResponse({ type: ProductDto })
    @ApiQuery({ type: FilterProductDto })
    @ApiOperation({ summary: `Get all product` })
    async findAllProduct(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto, 
        @QueryPage() { STARTPAGE, RANGEEND, ...filterProductDto }: FilterProductDto) {
        const { rows, count } = await this.productService.findAllProduct({ STARTPAGE, RANGEEND, ...filterProductDto });
        return res
            .header('Content-Range', `${STARTPAGE + 1}-${RANGEEND}/${count}`)
            .send(rows);
    }

    @Get(':productId')
    @ApiOkResponse({ type: ProductDto })
    @ApiOperation({ summary: `Get a product detail ` })
    async findAllInventory(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto, 
        @Param('productId') productId: number) {
        const hasProduct = await this.productService.findProductDetail(productId)
        if (!hasProduct) throw new NotFoundException(MSG_PRODUCT.NOT_FOUNT_PRODUCT)
        return res.send(hasProduct)
    }

    @Patch(`:productId`)
    @ApiOperation({ summary: `Update detail product` })
    @ApiBody({ type: UpdateProductDto })
    async updateDetail(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto, 
        @Param('productId') productId: number, @BodyWithUpdatedBy() updateProductDto: UpdateProductDto) {

        const hasProduct = await this.productService.findProductDetail(productId)
        if (!hasProduct) throw new NotFoundException(MSG_PRODUCT.NOT_FOUNT_PRODUCT)

        const [hasUpdate] = await this.productService.updateProduct(updateProductDto, productId)
        if (!hasUpdate) throw new NotFoundException(MSG_PRODUCT.INVALID_UPDATED)

        return res.send(hasUpdate)
    }
}