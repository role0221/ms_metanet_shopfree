import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'database/database.module';
import { ProductModule } from './product/product.module';
import { CmsManagementModule } from './cms-management/cms-management.module';

@Module({
  imports: [DatabaseModule, ProductModule, CmsManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
