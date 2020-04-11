<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    :class="color ? `is-${color}` : ''"
  >
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="section is-small is-fullwidth">
        <div class="level">
          <editable-image
            class="level-item has-text-centered"
            :class="`has-text-${color}-invert`"
            :value="content.logo"
            :editable="editable"
            @value="content.logo = $event"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class HeaderExSimpleLogoMiddle extends mixins(
  HtmlSnippetMixin
) {}
</script>
