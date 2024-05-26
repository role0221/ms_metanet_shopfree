
import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { FastifyReply } from 'fastify'

@Injectable()
export class Authentication implements NestMiddleware {
    async use(req: any, res: FastifyReply, next: any) {
        /** CHECK hospCode */
        if (!req.headers.hospcode) throw new BadRequestException(`HOSPITAL_CODE_IS_REQUIRED`)
        // const authorization = req.headers.authorization
        // if (!authorization) throw new ForbiddenException()
        Object.assign(req, {
            fullName: `Gata`
        })
        // const [tokenType, token] = authorization.split(' ')
        // tokenType
        // if (!token) throw new ForbiddenException()
        next()
    }
}
