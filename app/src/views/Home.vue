<template>
  <div class="home">
    <Proposal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Proposal from '@/components/Proposal.vue'; // @ is an alias to /src

@Component({
  components: {
    Proposal,
  },
})
export default class Home extends Vue { }
</script>
