<template>
  <div class="home">
    <NetworkInfoComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NetworkInfoComponent from '@/components/NetworkInfoComponent.vue' // @ is an alias to /src

@Component({
  components: {
    NetworkInfoComponent
  }
})
export default class Home extends Vue {}
</script>
