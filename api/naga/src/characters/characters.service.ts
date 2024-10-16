import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CharactersService {
  constructor(private configService: ConfigService) {}

  async getAllCharacters(
    page: number,
    limit: number,
    sortBy: string,
    order: string,
    search: string,
  ): Promise<{ totalPages: number; characters: Array<Record<string, any>> }> {
    const url = process.env.THRONESAPI_CHARACTER_URL;
    let data = await this.configService.apiRequestGet(url);

    // Search character(s)
    if (search) {
      data = data.filter((char: Record<string, string>) =>
        char.fullName.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort data
    const sortedData = data.sort(
      (a: Record<string, string>, b: Record<string, string>) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        } else {
          return b[sortBy].localeCompare(a[sortBy]);
        }
      },
    );

    const totalItems: number = sortedData.length;

    if (limit > totalItems) {
      limit = totalItems;
    }

    // Detail of filtered data
    const totalPages: number = Math.ceil(Number(totalItems) / Number(limit));

    if (page < 1) {
      throw new BadRequestException('Invalid page request');
    }

    // Set default if current page exceeds total pages
    if (page > totalPages) {
      page = totalPages;
    }

    // Paginate
    const startIdx = (page - 1) * limit;
    const finalData = sortedData.slice(
      Number(startIdx),
      Number(startIdx) + Number(limit),
    );

    return { totalPages, characters: finalData };
  }

  async getCharacterById(id: number): Promise<Record<string, string>> {
    const url = `${process.env.THRONESAPI_CHARACTER_URL}/${id}`;
    const headers = {
      accept: 'application/json',
    };

    return await this.configService.apiRequestGet(url, headers);
  }
}
