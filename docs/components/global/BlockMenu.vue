<template>
  <nav class="block-menu" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="tabs b-tabs is-toggle is-primary">
        <ul>
          <nuxt-link
            v-for="item in normalizedData"
            :key="item.title"
            tag="li"
            :to="item.path"
          >
            <a>
              {{ item.title }}
            </a>
          </nuxt-link>
        </ul>
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
