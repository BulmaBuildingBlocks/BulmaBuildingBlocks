<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" :class="color ? `is-${color}` : ''">
    <div :class="container ? 'container' : 'navbar-menu'">
      <div class="section is-small is-fullwidth">
        <div class="level">
          <div class="level-item has-text-centered">
            <a href="#">
              <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class Index extends mixins(HtmlSnippetMixin) {}
</script>
