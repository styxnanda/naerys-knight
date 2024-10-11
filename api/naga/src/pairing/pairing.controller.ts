import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('pairing')
export class PairingController {
    @Get('search')
    retrievePairingWorksURL(@Body() inputs: Array<{key: string, name: string}>): Record<string, string> {
        if(!inputs || inputs.some(input => !input.name)){
            throw new HttpException('Invalid input data', HttpStatus.BAD_REQUEST);
        }
        
        let appendedPairingURI: string = '';
        
        for(const input of inputs){
            appendedPairingURI += input.name + '*s*';
        }

        appendedPairingURI = appendedPairingURI.slice(0, -3);
        appendedPairingURI = encodeURIComponent(appendedPairingURI);

        return {
            "success_code": `${HttpStatus.OK}`,
            "url": `https://archiveofourown.org/tags/${appendedPairingURI}/works`,
        }
    }
}
