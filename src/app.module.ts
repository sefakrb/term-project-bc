import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { ContractController } from './controller/contract.controller';
import { ContractService } from './service/contract.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, ContractController],
  providers: [AppService, ContractService],
})
export class AppModule {}
