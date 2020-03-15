<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-9-desktop is-6-widescreen">
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
export default class Index extends mixins(HtmlSnippetMixin) {}
</script>
