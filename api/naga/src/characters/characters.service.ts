import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CharactersService {
  constructor(private configService: ConfigService) {}

  async getAllCharacters(
    page: number,
    limit: number,
    sortBy: string,
    order: string,
  ): Promise<Array<Record<string, any>>> {
    const url = `https://thronesapi.com/api/v2/Characters`;
    const data = await this.configService.apiRequestGet(url);

    // Sort data
    const sortedData = data.sort((a: any, b: any) => {
      if (order === 'asc') {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return b[sortBy].localeCompare(a[sortBy]);
      }
    });

    // Paginate
    const startIdx = (page - 1) * limit;
    const finalData = sortedData.slice(
      Number(startIdx),
      Number(startIdx) + Number(limit),
    );

    return finalData;
  }

  async getCharacterById(id: number): Promise<Record<string, string>> {
    const url = `https://thronesapi.com/api/v2/Characters/${id}`;
    const headers = {
      accept: 'application/json',
    };

    return await this.configService.apiRequestGet(url, headers);
  }
}
