<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    :class="color ? `is-${color}` : ''"
  >
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="navbar-brand">
        <editable-image
          class="navbar-item"
          :class="`has-text-${color}-invert`"
          :value.sync="content.logo"
          :editable="editable"
          @value="content.logo = $event"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class HeaderExSimpleLogoLeft extends mixins(HtmlSnippetMixin) {}
</script>
