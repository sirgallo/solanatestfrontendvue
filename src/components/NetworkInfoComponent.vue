<template>
  <div>
    <b-container>
      <b-row>
        <b-col>Current Slot: {{ netInfo.slot }}</b-col>
        <b-col>Current Block Time: {{ netInfo.blockTime }}</b-col>
        <b-col>Current Block: {{ netInfo.block ? netInfo.block.blockhash : 'no block selected' }}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { INetworkInfo } from 'models/NetworkInfo'
import { NetworkInfoProvider } from '../../providers/NetworkInfoProvider'

@Component
export default class NetworkInfoComponent extends Vue {
  network = new NetworkInfoProvider('devnet')
  netInfo: INetworkInfo = {
    slot: 0,
    blockTime: 0,
    block: null,
    slotLeader: ''
  }

  async created () {
    await this.network.getNetworkInfo()
    await this.pollData()
  }

  async pollData () {
    setInterval(async () => {
      this.netInfo = await this.network.getNetworkInfo()
    }, 1000)
  }
}
</script>
