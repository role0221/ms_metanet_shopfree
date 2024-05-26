import { CmsManagementService } from './cms-management.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BadRequestException, Controller, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { BodyWithCreatedBy } from '@/decorator/created-by.decorator';
import { CreateRegisterDto } from './dto/create-cms.dto';
import { registerUser } from '@/utils/cms-axios';
import { MSG_CMS } from './cms-management.schema';

@ApiBearerAuth()
@ApiTags(`cms-management`)
@Controller(`cms-management`)
// @ApiHeaders([{ name: 'hospCode', required: true }, { name: 'username', required: true }, { name: 'provinceCode', required: true }, { name: 'userCode', required: true },])
export class CmsManagementController {
    constructor(readonly cmsManagementService: CmsManagementService) { }

    // [PATCH] deposit

    // [PATCH] withdraw

    // [PATCH] payment & cut stock

    //================

    // [POST]  register

    // [GET] login & getDetail move in jwt or json


    // [POST]  register

    @Post()
    @ApiOperation({ summary: `Create register` })
    @ApiOkResponse({ type: String })
    @ApiBody({ type: CreateRegisterDto })
    async create(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto,
        @BodyWithCreatedBy() createRegisterDto: CreateRegisterDto) {
        console.log("🚀 ~ CmsManagementController ~ @BodyWithCreatedBy ~ createRegisterDto:", createRegisterDto)

        const hasRegister = registerUser(createRegisterDto)
        if (!hasRegister) throw new BadRequestException(MSG_CMS.INVALID_CREATED)

        // Coming soon ..

        return res.send('Coming soon ..')
    }
}