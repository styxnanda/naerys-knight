import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { PairingModule } from './pairing/pairing.module';

@Module({
  imports: [CharactersModule, PairingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
