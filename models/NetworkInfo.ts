import * as web3 from '@solana/web3.js';

export interface INetworkInfo {
  slot: number | null;
  blockTime: number | null;
  block: web3.BlockResponse | null;
  slotLeader: string | null;
}