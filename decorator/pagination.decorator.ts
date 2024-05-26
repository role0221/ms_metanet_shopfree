import { PAGINATION } from "@/constants/pagination";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const QueryPage = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
    const { query } = ctx.switchToHttp().getRequest()

    return { ...query, ...PAGINATION(query.page, query.pageLimit) }
});