import { ArgumentMetadata, BadRequestException, ValidationPipe } from "@nestjs/common"
export class GlobalValidationPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            return await super.transform(value, metadata)
        } catch (e) {
            if (e instanceof BadRequestException) {
                const res = e.getResponse() as any
                if (typeof res == 'object') {
                    const message = res.message[0].split('.')
                    throw new BadRequestException(message[message.length - 1])
                } else {
                    throw new BadRequestException(res.message)
                }
            }
        }
    }
}
