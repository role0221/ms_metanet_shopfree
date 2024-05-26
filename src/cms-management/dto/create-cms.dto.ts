import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateRegisterDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'USER_NAME_REQUIRED' })
    readonly username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'PASSWORD_REQUIRED' })
    readonly password: string;

    @ApiHideProperty()
    @IsOptional()
    public createdBy?: string;

}