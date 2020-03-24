<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-9-desktop is-6-widescreen">
          <h2 class="title is-1 is-spaced" :class="color ? `has-text-${color}-invert` : ''">Bulma Building Blocks</h2>
          <h3 class="subtitle" :class="color ? `has-text-${color}-invert` : ''">
            Continually initiate fully tested human capital before an expanded array of action items. Proactively
            benchmark next-generation information.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class ContentSimpleTitleSubtitle extends mixins(HtmlSnippetMixin) {}
</script>
