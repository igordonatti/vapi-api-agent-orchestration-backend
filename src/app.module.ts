import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VapiGateway } from './vapi/vapi.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, VapiGateway],
})
export class AppModule {}
