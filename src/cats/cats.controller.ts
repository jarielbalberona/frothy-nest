import {
  Controller,
  Get,
  HttpCode,
  Redirect,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  getCat(): string {
    return 'Cats EP';
  }

  @Get('redirect')
  @HttpCode(200)
  @Redirect('https://docs.nestjs.com', 302)
  redirectCat(): string {
    return 'Cats redirect';
  }

  @Get('bread/:id')
  @HttpCode(200)
  async getBread(@Param('id', ParseIntPipe) id: string): Promise<string> {
    return id;
  }

  @Get('fr*th')
  getHello(): string {
    return 'Some wildcard froth';
  }
}
