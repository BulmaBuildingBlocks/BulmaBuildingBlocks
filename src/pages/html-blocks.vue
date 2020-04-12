<template>
  <div content="html-blocks">
    <section class="documentation">
      <block-menu />

      <div class="docs-main">
        <nuxt-child />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockMenu from '~/components/global/BlockMenu.vue';

@Component({
  components: {
    BlockMenu
  }
})
export default class Default extends Vue {}
</script>
