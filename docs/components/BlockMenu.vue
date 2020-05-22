<template>
  <nav class="block-menu" role="navigation" aria-label="main navigation">
    <div class="buttons is-toggle">
      <nuxt-link
        v-for="item in menu"
        :key="routes.get(item).path"
        tag="button"
        :to="routes.get(item).path"
        class="button is-white is-small"
        active-class="is-primary is-inverted is-outlined"
      >
        {{ routes.get(item).title | capitalize }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import menu from '~/data/blocks-menu.json';
import routes from '~/data/routes';

@Component
export default class BlockMenu extends Vue {
  menu = menu;
  routes = routes;
}
</script>
