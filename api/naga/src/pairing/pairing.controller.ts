import { Body, Controller, Get, Post } from '@nestjs/common';
import { PairingService } from './pairing.service';

@Controller('pairing')
export class PairingController {
  constructor(private readonly pairingService: PairingService) {}
  @Post('search')
  retrievePairingWorksURL(
    @Body() inputs: Array<{ key: string; name: string }>,
  ): Record<string, string> {
    return this.pairingService.retrievePairingWorksURL(inputs);
  }
}
