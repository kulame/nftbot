import { EthereumService } from '@app/ethereum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScanjobService {
  constructor(private readonly eth: EthereumService) {}

  async getRecentBlock() {
    const number = await this.eth.getRecentBlock();
    console.log(number);

    return number;
  }
}
