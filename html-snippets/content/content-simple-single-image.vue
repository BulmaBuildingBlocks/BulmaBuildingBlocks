<template>
  <div class="section is-large has-text-centered" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <h2 class="title is-1" :class="color ? `has-text-${color}-invert` : ''">
        Bulma Building Blocks
      </h2>
      <h3 class="subtitle" :class="color ? `has-text-${color}-invert` : ''">
        Helping to create
      </h3>
      <div class="buttons is-centered">
        <a href="#" class="button is-text">
          About
        </a>
        <a href="#" class="button is-primary">
          Shop
        </a>
      </div>
      <div class="columns is-centered">
        <div class="column is-9-desktop is-7-widescreen">
          <div class="image is-3by2 is-contained">
            <img src="~/assets/images/Scene Living Room.svg" />
          </div>
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
