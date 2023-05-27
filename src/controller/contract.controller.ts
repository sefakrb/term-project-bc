import { Body, Controller, Get, Post, RequestMapping } from '@nestjs/common';
import { CreateContract } from 'src/dto/create-contract.dto';
import { ContractService } from 'src/service/contract.service';

interface Contract {
  abi: string;
  byteCode: string;
  mainContract: string;
}

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('/create')
  async createContract(
    @Body() contractParameters: CreateContract,
  ): Promise<Contract> {
    const response = await this.contractService.createContract(
      contractParameters,
    );

    return response;
  }
}
