<template>
  <div content="html-blocks">
    <block-menu />
    <section class="documentation">
      <nuxt-child />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockMenu from '~/components/BlockMenu.vue';

@Component({
  components: {
    BlockMenu
  }
})
export default class Default extends Vue {}
</script>
