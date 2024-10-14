import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Get()
  async getAllCharacters(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sort') sortBy: string = 'fullName',
    @Query('order') order: string = 'asc',
    @Query('search') search: string = '',
  ): Promise<{ totalPages: number; characters: Array<Record<string, any>> }> {
    return await this.characterService.getAllCharacters(
      page,
      limit,
      sortBy,
      order,
      search,
    );
  }

  @Get('detail')
  async getCharacterById(
    @Query('id') charId: number,
  ): Promise<Record<string, string>> {
    return await this.characterService.getCharacterById(charId);
  }

  // This is just me learning how to code in NestJS, haha
  // @Get('special/:id/:name')
  // getCharacterSpecial(@Param() params: { id: string, name: string }): string {
  //     const { id: charId, name: charName } = params;
  //     return `Hi, your ID is ${charId} and your name is ${charName}!`;
  // }

  // @Post('create')
  // createNewCharacter(@Body() input: Array<Record<string, string>>): Record<string, string>{
  //     return input[2] || {
  //         "result": "empty"
  //     };
  // }
}
