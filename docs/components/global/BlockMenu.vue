<template>
  <nav
    class="block-menu has-background-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="buttons has-addons is-toggle">
        <nuxt-link
          v-for="item in normalizedData"
          :key="item.title"
          tag="button"
          :to="item.path"
          class="button is-white is-small"
          active-class="is-primary is-inverted is-outlined"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Routes from '~/data/routes.json';
import MenuData from '~/data/block-menu.json';

export interface RoutesObj {
  [key: string]: {
    [key: string]: {};
  };
}

@Component
export default class BlockMenu extends Vue {
  get normalizedData(): { [p: string]: {} }[] {
    const routes: RoutesObj = Routes;
    const menu: string[] = MenuData;
    return menu.map((item: string) => {
      return routes[item];
    });
  }
}
</script>
