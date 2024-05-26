import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

const DEFAULT_PER_PAGE = 10;
const MAX_PAGE_LIMIT = 50000;

const PAGINATION = (page: number, pageLimit: number): { STARTPAGE: number; PERPAGE: number; RANGEEND: number } => {
  const PAGE = page || 1;
  const PERPAGE = pageLimit ? (pageLimit > MAX_PAGE_LIMIT ? MAX_PAGE_LIMIT : parseInt(String(pageLimit), 10)) : DEFAULT_PER_PAGE;
  const STARTPAGE = (PAGE - 1) * PERPAGE;
  const RANGEEND = STARTPAGE + PERPAGE;
  return { STARTPAGE, PERPAGE, RANGEEND };
};

export { PAGINATION, DEFAULT_PER_PAGE, MAX_PAGE_LIMIT };


export class PaginationDto {
  @ApiProperty({ minimum: 1, default: 1 })
  public page?: number;

  @ApiProperty({ minimum: 1, maximum: 100, default: 10 })
  public pageLimit?: number;

  @ApiHideProperty()
  public STARTPAGE?: number

  @ApiHideProperty()
  public PERPAGE?: number

  @ApiHideProperty()
  public RANGEEND?: number
}

