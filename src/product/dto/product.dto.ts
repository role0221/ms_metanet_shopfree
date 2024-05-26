import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {

    @ApiProperty()
    productId: number;

    @ApiProperty()
    productName: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    status: string;

    @ApiProperty()
    updatedBy: string;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    createdBy: string;

    @ApiProperty()
    createdAt: Date;

}

export class ProductsDto {

    @ApiProperty()
    productId: number;

    @ApiProperty()
    productName: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    quantity: number;

}