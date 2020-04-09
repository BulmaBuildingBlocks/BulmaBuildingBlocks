<template>
  <div>
    <header class="section is-large has-background-info homepage-banner">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="section is-medium">
              <h1 class="title has-text-white">
                Bulma Building Blocks
              </h1>
              <h2 class="subtitle has-text-white">
                Snippets that can be used to create your site
              </h2>
            </div>
          </div>
          <div
            class="column is-paddingless is-half is-offset-1 homepage-banner-img"
          ></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HomePage extends Vue {}
</script>
