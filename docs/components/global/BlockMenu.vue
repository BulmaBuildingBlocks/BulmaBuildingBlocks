<template>
  <nav
    class="navbar navbar-block-menu is-primary is-medium block-menu"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-start">
        <nuxt-link
          v-for="item in normalizedData"
          :key="item.title"
          class="navbar-item"
          :to="item.path"
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
