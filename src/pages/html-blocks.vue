<template>
  <div content="html-blocks">
    <section class="documentation">
      <v-sidebar :data="menu" />

      <div class="docs-main">
        <nuxt-child />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VSidebar from '~/components/global/Sidebar.vue';
import menuData from '~/data/menu.json';

@Component({
  components: {
    VSidebar
  }
})
export default class Default extends Vue {
  menu = menuData;
}
</script>
