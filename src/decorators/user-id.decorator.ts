import { ExecutionContext, createParamDecorator } from "@nestjs/common";
export const UserId = createParamDecorator(
    (_:unknown, ctx: ExecutionContext) : number | null => {
        const request = ctx.switchToHttp().getRequest();
        console.log('Request object:', request);
        return request.user?.id ? Number(request.user.id) : null
    },
)