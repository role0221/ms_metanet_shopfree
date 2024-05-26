import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('healthz')
  async healthzCheck(@Res() res: FastifyReply,) {
    return res.send(200);
  }
}