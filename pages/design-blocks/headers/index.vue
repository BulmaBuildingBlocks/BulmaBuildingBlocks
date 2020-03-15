<template>
  <div id="page-headers" class="section">
    <div class="container">
      <Example title="Navbar with Logo Left" :component="ExSimpleLogoLeft" color="white" />
      <Example title="Navbar with Logo Center" :component="ExSimpleLogoMiddle" color="white" />
      <Example title="Navbar with Simple Nav" :component="ExSimple" color="white" />
      <Example title="Navbar without hover" :component="ExSimpleTransparent" color="white" />
      <Example title="Navbar Centered" :component="ExMenuCenter" color="white" />
    </div>
  </div>
</template>

<script lang="ts">
import ExSimpleLogoLeft from '~/html-snippets/headers/header-simple-logo-left.vue';
import ExSimpleLogoMiddle from '~/html-snippets/headers/header-simple-logo-middle.vue';
import ExSimple from '~/html-snippets/headers/header-simple.vue';
import ExSimpleTransparent from '~/html-snippets/headers/header-simple-transparent.vue';
import ExMenuCenter from '~/html-snippets/headers/header-simple-menu-center.vue';

import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

@Component
export default class Index extends Vue {
  ExSimpleLogoLeft = ExSimpleLogoLeft;
  ExSimpleLogoMiddle = ExSimpleLogoMiddle;
  ExSimple = ExSimple;
  ExSimpleTransparent = ExSimpleTransparent;
  ExMenuCenter = ExMenuCenter;
}
</script>
