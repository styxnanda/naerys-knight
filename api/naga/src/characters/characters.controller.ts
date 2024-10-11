import { Body, Controller, Get, HttpException, Param, Post, Query } from '@nestjs/common';

const tempCharacters: Array<Record<string, any>> = [
    { "id":"0", "name": "Jon Snow"},
    { "id":"1", "name": "Cregan Stark"},
    { "id":"2", "name": "Howland Reed"},
    { "id":"3", "name": "Alysanne Targaryen"}
]

@Controller('characters')
export class CharactersController {
    // To-do: Pagination
    @Get()
    getAllCharacters(): Array<Record<string, any>> {
        return tempCharacters;
    }

    // To-do: Will have different implementation
    @Get('detail')
    getCharacterById(@Query('id') charId: string = '0'): string {
        return `This character, ${tempCharacters.find((item) => item.id === charId)?.name || "Jon Snow"}, has had a wild arc in the show!`;
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