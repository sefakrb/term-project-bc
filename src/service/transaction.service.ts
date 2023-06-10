import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/dto/transaction.dto';
import * as getTransactions from '../../utils/getTransaction.js';

let TransactionResult = [];

@Injectable()
export class TransactionService {
  displayTransactions(transactionParameters: String): any {
    return getTransactions(transactionParameters).then((res: any) => {
      return res;
    });
  }
}
