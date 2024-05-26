import { Test, TestingModule } from '@nestjs/testing';
import { CmsManagementController } from './cms-management.controller';

describe('CmsManagementController', () => {
  let controller: CmsManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmsManagementController],
    }).compile();

    controller = module.get<CmsManagementController>(CmsManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
