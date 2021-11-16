import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
@Injectable()
export class EthereumService {
  provider: ethers.providers.JsonRpcProvider;

  constructor() {
    const url = 'https://mainnet.infura.io/v3/75ba8fb3d9564a1fac7712e8f5085335';
    this.provider = new ethers.providers.JsonRpcProvider(url);
  }
  async getRecentBlock() {
    const block = this.provider.getBlockNumber();
    const signer = this.provider.getSigner();
    const daiAddress = 'dai.tokens.ethers.eth';

    const abi = [
      'function name() view returns (string)',
      'function symbol() view returns (string)',

      'function balanceOf(address) view returns (uint)',

      'function transfer(address to, uint amount)',
      // An event triggered whenever anyone transfers to someone else
      'event Transfer(address indexed from, address indexed to, uint amount)',
    ];
    const contract = new ethers.Contract(
      daiAddress,
      abi,
      this.provider.getSigner(0),
    );
    contract.on('Transfer', (to, amount, from) => {
      console.log(to, amount, from);
    });
    return block;
  }
}
