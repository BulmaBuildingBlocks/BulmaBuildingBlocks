<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation" :class="color ? `is-${color}` : ''">
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="level is-fullwidth">
        <div class="level-item has-text-centered">
          <a class="navbar-item" :class="color ? `has-text-${color}-invert` : ''">Home</a>
        </div>
        <div class="level-item has-text-centered">
          <a class="navbar-item" :class="color ? `has-text-${color}-invert` : ''">Menu</a>
        </div>
        <div class="level-item has-text-centered">
          <a href="#">
            <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;" />
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a class="navbar-item" :class="color ? `has-text-${color}-invert` : ''">Reservations</a>
        </div>
        <div class="level-item has-text-centered">
          <a class="navbar-item" :class="color ? `has-text-${color}-invert` : ''">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class HeaderExMenuCenter extends mixins(HtmlSnippetMixin) {}
</script>
