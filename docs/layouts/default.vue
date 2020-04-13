<template>
  <main>
    <v-navbar />

    <section class="documentation">
      <div class="docs-main">
        <nuxt />
      </div>
    </section>

    <v-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNavbar from '~/components/global/Navbar.vue';
import VFooter from '~/components/global/Footer.vue';

@Component({
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  components: {
    VNavbar,
    VFooter
  }
})
export default class Default extends Vue {}
</script>
