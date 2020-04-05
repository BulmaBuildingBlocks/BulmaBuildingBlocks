<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <div class="columns">
        <div class="column is-9-desktop is-7-widescreen">
          <h2 class="subtitle" :class="color ? `has-text-${color}-invert` : ''">
            Continually initiate fully tested human capital before an expanded array of action items. Proactively
            benchmark next-generation information.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class ContentSubtitleLeft extends mixins(HtmlSnippetMixin) {}
</script>
