<template>
  <div class="page-homepage">
    <section class="page-homepage__hero hero is-primary is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="image is-128x128 block">
            <img src="~static/icon-white.png" />
          </div>
          <h1 class="title has-text-white">
            Bulma Building Blocks
          </h1>
          <h2 class="subtitle has-text-white">
            Html Building Blocks using the Bulma css framework
          </h2>
          <div class="buttons is-centered">
            <nuxt-link
              class="button is-medium is-white is-outlined"
              to="/html-blocks/headers"
            >
              Html Blocks
            </nuxt-link>
            <nuxt-link class="button is-medium is-white" to="/page-builder">
              Page Builder
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HomePage extends Vue {}
</script>
