import { Catch, ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';
import { FastifyReply } from 'fastify';

const errorDescription = {
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '500': 'Internal Server Error',
    // Add more status codes as needed
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply>();

        let status = 400;
        let errorMsgCode = '';

        try {
            status = exception.getStatus();
            const getResponse = exception.getResponse() as { messageCode?: string } | string;

            if (typeof getResponse === 'object') {
                errorMsgCode = getResponse.messageCode || '';
            }
        } catch (error) {
            console.error('Error occurred while processing exception:', error);
        }

        const message = exception.message || 'Internal Server Error';

        response.status(status).send({
            statusCode: status,
            errorDescription: errorDescription[status.toString()],
            messageCode: errorMsgCode,
            message,
        });
    }
}
