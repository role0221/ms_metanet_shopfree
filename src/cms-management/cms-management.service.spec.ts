import { Test, TestingModule } from '@nestjs/testing';
import { CmsManagementService } from './cms-management.service';

describe('CmsManagementService', () => {
  let service: CmsManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmsManagementService],
    }).compile();

    service = module.get<CmsManagementService>(CmsManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
