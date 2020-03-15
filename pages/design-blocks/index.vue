<template>
  <div>
    <header class="has-background-warning homepage-banner">
      <div class="container is-fluid is-gapless-tablet is-clipped">
        <div class="columns">
          <div class="column is-one-quarter is-offset-2">
            <div class="section is-medium">
              <h1 class="title">
                Design Blocks
              </h1>
              <h2 class="subtitle">
                Selection of building blocks that can be used to power your site
              </h2>
            </div>
          </div>
          <div class="column is-paddingless is-half is-offset-1 homepage-banner-img"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {}
</script>
