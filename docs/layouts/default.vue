<template>
  <main>
    <v-navbar />

    <div class="documentation">
      <nuxt />
    </div>

    <v-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNavbar from '~/components/Navbar.vue';
import VFooter from '~/components/Footer.vue';
import routes from '~/data/routes';

@Component({
  components: {
    VNavbar,
    VFooter
  },
  head() {
    const routePath = this.$route.path;
    const routeItem = this.routes.get(routePath);

    if (routeItem) {
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
})
export default class Default extends Vue {
  routes = routes;
}
</script>
