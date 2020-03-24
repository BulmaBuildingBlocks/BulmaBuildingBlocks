<template>
  <div id="page-headers" class="section">
    <Example v-for="component in components" :key="component.name" v-bind="component" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

import components from '~/html-snippets/headers';

@Component
export default class Index extends Vue {
  components = components;
}
</script>
