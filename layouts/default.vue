<template>
  <main>
    <v-navbar />

    <section class="documentation">
      <v-sidebar :data="menu" />

      <div class="docs-main">
        <nuxt />
      </div>
    </section>

    <v-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNavbar from '~/components/Navbar.vue';
import VFooter from '~/components/Footer.vue';
import VSidebar from '~/components/Sidebar.vue';
import menuData from '~/data/menu.json';

@Component({
  head() {
    const i18nSeo = this.$nuxtI18nSeo();

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: i18nSeo.meta,
      link: i18nSeo.link
    };
  },
  components: {
    VNavbar,
    VFooter,
    VSidebar
  }
})
export default class Default extends Vue {
  menu = menuData;
}
</script>
