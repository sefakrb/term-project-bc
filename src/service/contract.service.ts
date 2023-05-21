import { Injectable } from '@nestjs/common';
import { CreateContract } from 'src/dto/create-contract.dto';
import { erc1155 } from '@openzeppelin/wizard';
// import { compile } from '../../utils/compile.js';
import * as compile from '../../utils/compile.js';
interface Contract {
  abi: string;
  byteCode: string;
}

@Injectable()
export class ContractService {
  async createContract(contractParameters: CreateContract): Promise<Contract> {
    const contract = erc1155.print({
      name: contractParameters.name,
      uri: contractParameters.uri,
      mintable: contractParameters.mintable,
      burnable: contractParameters.burnable,
    });

    return await compile(contract, contractParameters.name);
  }
}
