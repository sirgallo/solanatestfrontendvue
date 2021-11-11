import * as web3 from '@solana/web3.js'
import { INetworkInfo } from '../models/NetworkInfo'

export class NetworkInfoProvider {
  private connection: web3.Connection

  constructor (private cluster: web3.Cluster) {
    this.connection = new web3.Connection(web3.clusterApiUrl(this.cluster))
  }

  async getNetworkInfo (): Promise<INetworkInfo> {
    try {
      const slot = await this.connection.getSlot()
      const blockTime = await this.connection.getBlockTime(slot)
      const block = await this.connection.getBlock(slot)
      const slotLeader = await this.connection.getSlotLeader()

      return { slot, blockTime, block, slotLeader }
    } catch (err) {
      console.log('Error stack: ', err)

      throw Error(err)
    }
  }
}
