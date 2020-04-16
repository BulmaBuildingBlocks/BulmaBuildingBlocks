<template>
  <nav
    class="block-menu has-background-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="buttons has-addons is-toggle">
        <nuxt-link
          v-for="(item, key) in blocks"
          :key="key"
          tag="button"
          :to="`/html-blocks/${key}`"
          class="button is-white is-small"
          active-class="is-primary is-inverted is-outlined"
        >
          {{ key | capitalize }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Blocks from '~/html-blocks';

@Component
export default class BlockMenu extends Vue {
  blocks = Blocks;
}
</script>
