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
      'event TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _amount)',
      'event TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _amounts)',
      'event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)',
      'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount, bytes calldata _data) external',
      'function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _amounts, bytes calldata _data) external',
      'function balanceOf(address _owner, uint256 _id) external view returns (uint256)',
      'function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory)',
      'function setApprovalForAll(address _operator, bool _approved) external',
      'function isApprovedForAll(address _owner, address _operator) external view returns (bool isOperator)',
    ];
    const contract = new ethers.Contract(daiAddress, abi, this.provider);
    contract.on('TransferSingle', (from, to, amount, event) => {
      console.log(event);
      console.log('---------------------------------------');
    });
    return block;
  }
}
