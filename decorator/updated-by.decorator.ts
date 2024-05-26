import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const BodyWithUpdatedBy = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
    const { body, raw } = ctx.switchToHttp().getRequest()

    return { ...body, updatedBy: `${raw.fullName}` }
});