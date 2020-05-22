<template>
  <main>
    <nuxt />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import routes from '~/data/routes';

@Component
export default class Empty extends Vue {
  routes = routes;

  head() {
    const routePath = this.$route.fullPath;
    const routeItem = this.routes.get(routePath);

    return {
      title: routeItem.title,
      titleTemplate: '%s | Bulma Building Blocks',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: routeItem.description
        }
      ]
    };
  }
}
</script>
