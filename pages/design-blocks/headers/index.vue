<template>
  <div id="page-headers" class="section">
    <div class="container">
      <Example title="Navbar with Logo Left" :component="ExSimpleLogoLeft" color="white" />

      <Example title="Navbar with Logo Center" :component="ExSimpleLogoMiddle" />

      <Example title="Navbar with Simple Nav" :component="ExSimple" color="white" />

      <!--
    <Example :component="ExTypesStates" :code="ExTypesStatesCode" title="Types and states" vertical/>

    <Example :component="ExSizes" :code="ExSizesCode" title="Sizes" vertical/>

    <Example :component="ExIcons" :code="ExIconsCode" title="Icons" vertical/>

    <Example :component="ExTags" :code="ExTagsCode" title="Tags" vertical/>

    <Example :component="ExRouter" :code="ExRouterCode" title="Router" vertical>
      <div class="tags has-addons">
        <span class="tag is-success">New!</span>
        <span class="tag is-info">0.7.6</span>
      </div>
    </Example>
  -->
    </div>
  </div>
</template>

<script lang="ts">
import ExSimpleLogoLeft from '~/html-snippets/headers/header-simple-logo-left.vue';
import ExSimpleLogoMiddle from '~/html-snippets/headers/header-simple-logo-middle.vue';
import ExSimple from '~/html-snippets/headers/header-simple.vue';

import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

@Component
export default class Index extends Vue {
  ExSimpleLogoLeft = ExSimpleLogoLeft;
  ExSimpleLogoMiddle = ExSimpleLogoMiddle;
  ExSimple = ExSimple;
}
</script>
