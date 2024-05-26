import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'PRODUCT_NAME_REQUIRED' })
    readonly productName: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'PRICE_REQUIRED' })
    readonly price: number

    @ApiProperty()
    @IsNotEmpty({ message: 'QUANTITY_REQUIRED' })
    readonly quantity: number

    @ApiProperty()
    @IsOptional()
    readonly category: string;

    @ApiHideProperty()
    public createdBy?: string

}