import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { CharactersController } from './characters.controller';

@Module({
    imports: [ConfigModule],
    controllers: [CharactersController]
})
export class CharactersModule {}
