import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ HttpModule ],
  controllers: [ConfigController],
  providers: [ConfigService]
})
export class ConfigModule {}
