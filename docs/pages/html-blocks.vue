<template>
  <div content="html-blocks">
    <div class="section is-small has-background-primary">
      <div class="container">
        <h1 class="title has-text-primary-invert">{{ pageTitle }}</h1>
        <block-menu />
      </div>
    </div>
    <section class="htmlbuildingblocks">
      <nuxt-child />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockMenu from '~/components/BlockMenu.vue';
import routes from '~/data/routes';

@Component({
  components: {
    BlockMenu
  }
})
export default class Default extends Vue {
  routes = routes;

  get pageTitle() {
    const routeItem = this.routes.get('html-blocks/' + this.$route.params.id);

    if (routeItem) {
      return routeItem.title;
    }

    return '';
  }
}
</script>
