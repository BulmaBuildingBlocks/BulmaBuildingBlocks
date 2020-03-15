<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container has-text-centered">
      <h2 class="title is-1" :class="color ? `has-text-${color}-invert` : ''">Bulma Building Blocks</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class Index extends mixins(HtmlSnippetMixin) {}
</script>
