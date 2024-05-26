import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const Province = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
    const { raw } = ctx.switchToHttp().getRequest()

    return { provinceCode: raw.provinceCode || '10' }
});

