import { Body, Controller, Get, Post, RequestMapping } from '@nestjs/common';
import { Transaction } from 'src/dto/transaction.dto';
import { TransactionService } from 'src/service/transaction.service';

interface TransactionResult {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    txreceipt_status: string;
    gasUsed: string;
    confirmations: string;
    functionName: string;
}

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService : TransactionService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('/details')
  createContract(
    @Body() transactionParameters: Transaction,
  ): TransactionResult {
    const response = this.transactionService.displayTransactions(transactionParameters.contractAddress);

    return response;
  }
}