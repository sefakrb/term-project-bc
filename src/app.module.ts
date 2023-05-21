import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { ContractController } from './controller/contract.controller';
import { ContractService } from './service/contract.service';

@Module({
  imports: [],
  controllers: [AppController, ContractController],
  providers: [AppService, ContractService],
})
export class AppModule {}
