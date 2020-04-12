<template>
  <nav
    class="navbar is-light is-medium is-spaced block-menu"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <ul class="navbar-start">
        <li v-for="item in normalizedData" :key="item.title">
          <nuxt-link v-if="item.title" class="navbar-item" :to="item.path">
            <span>{{ item.title }}</span>
            <b-tag v-if="item.isNew" type="is-success">New!</b-tag>
            <b-tag v-if="item.isUpdated" type="is-info">Updated</b-tag>
          </nuxt-link>
        </li>
      </ul>
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
