import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class EthereumService {
  web3: Web3;

  constructor() {
    this.web3 = new Web3(
      'https://mainnet.infura.io/v3/75ba8fb3d9564a1fac7712e8f5085335',
    );
  }
  async getRecentBlock() {
    return this.web3.eth.getBlockNumber();
  }
}
