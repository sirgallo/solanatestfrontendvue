<template>
  <div>
    <div id="slotContainer" class="container">
      <p>Current Slot: {{ netInfo.slot }}</p>
    </div>
    <div id="blockContainer" class="container">
      <p>Current Block Time: {{ netInfo.blockTime }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { NetworkInfoProvider } from '../../providers/NetworkInfoProvider'
import { INetworkInfo } from 'models/NetworkInfo'

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
