import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ConfigService {
    constructor(private httpService: HttpService){};

    async apiRequestGet(url: string, headers?: Record<string, string>): Promise<any> {
        const { data  } = await firstValueFrom(this.httpService.get(url, { headers }).pipe(
            catchError((error) => {
                throw `An error has occurred. Msg: ${JSON.stringify(
                    error?.response?.data,
                )}`;
            })
        ))

        return data;
    };
}
