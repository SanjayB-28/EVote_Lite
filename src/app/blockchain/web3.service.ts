import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from "web3-eth-contract";

const contractAbi = require("./contractABI.json")
declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private contractAddress = '0xce64AC6fC74E7c4186A3E548fa643d3aEEB5e712';

  constructor() {
    if(window.web3){
      this.web3= new Web3(window.ethereum)
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );

      window.ethereum.enable().catch((err) => {
        console.log(err)
      })
    } else {
      console.warn('Metamask is not found. Install or enable Metamask.')
    }
  }

  getAccount(): Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || '');
  }

  async executeTransaction(fnName: string, ...args: any[]): Promise<void> {
    const acc= await this.getAccount()
    this.contract.methods['fnName'](...args).send({from: acc});
  }
}
