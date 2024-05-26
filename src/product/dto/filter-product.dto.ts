import { ApiProperty } from "@nestjs/swagger"
import { PaginationDto } from "@/constants/pagination"

export class FilterProductDto extends PaginationDto {

    @ApiProperty({ required: false })
    readonly search: string

    @ApiProperty({ required: false })
    readonly sortBy: string

    @ApiProperty({ required: false })
    readonly sortType: string

    @ApiProperty({ required: false })
    readonly category: string

}