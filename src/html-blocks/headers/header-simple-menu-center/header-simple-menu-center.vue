<template>
  <nav
    class="navbar is-spaced"
    role="navigation"
    aria-label="main navigation"
    :class="color ? `is-${color}` : ''"
  >
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="level is-fullwidth">
        <editable-link
          v-for="(item, index) in content.navLeft"
          :key="index + 'navLeft'"
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="item"
          :editable="editable"
          @value="item = $event"
        />
        <editable-image
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="content.logo"
          :editable="editable"
          @value="content.logo = $event"
        />
        <editable-link
          v-for="(item, index) in content.navRight"
          :key="index + 'navRight'"
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="item"
          :editable="editable"
          @value="item = $event"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class HeaderExMenuCenter extends mixins(HtmlBlockMixin) {}
</script>
