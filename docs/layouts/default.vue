<template>
  <main>
    <v-navbar />

    <section class="documentation">
      <nuxt />
    </section>

    <v-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNavbar from '~/components/Navbar.vue';
import VFooter from '~/components/Footer.vue';

@Component({
  components: {
    VNavbar,
    VFooter
  }
})
export default class Default extends Vue {}
</script>
