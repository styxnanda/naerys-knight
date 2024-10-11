import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { PairingController } from './pairing.controller';

@Module({
    imports: [ConfigModule],
    controllers: [PairingController]
})
export class PairingModule {}
