import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [CharactersController],
    providers: [CharactersService, ConfigService]
})
export class CharactersModule {}
