
import { CmsManagementController } from './cms-management.controller';
import { CmsManagementService } from './cms-management.service';
import { cmsProviders } from './cms-management.providers';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CmsManagementController],
  providers: [CmsManagementService, ...cmsProviders]
})
export class CmsManagementModule { }
