import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {

    @ApiProperty()
    readonly productId: number

}