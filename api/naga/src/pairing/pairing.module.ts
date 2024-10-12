import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { PairingController } from './pairing.controller';
import { PairingService } from './pairing.service';

@Module({
    imports: [ConfigModule],
    controllers: [PairingController],
    providers: [PairingService]
})
export class PairingModule {}
