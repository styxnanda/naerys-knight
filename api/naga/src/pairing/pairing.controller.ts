import { Body, Controller, Get } from '@nestjs/common';
import { PairingService } from './pairing.service';

@Controller('pairing')
export class PairingController {
    constructor(private readonly pairingService: PairingService){}
    @Get('search')
    retrievePairingWorksURL(@Body() inputs: Array<{key: string, name: string}>): Record<string, string> {
        return this.pairingService.retrievePairingWorksURL(inputs);
    }
}
