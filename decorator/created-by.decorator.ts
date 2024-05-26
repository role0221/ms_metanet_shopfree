import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const BodyWithCreatedBy = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
    const { body, raw } = ctx.switchToHttp().getRequest()

    return { ...body, createdBy: `${raw.fullName}` }
});

