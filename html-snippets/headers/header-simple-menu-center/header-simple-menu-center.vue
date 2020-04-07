<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation" :class="color ? `is-${color}` : ''">
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="level is-fullwidth">
        <editable-content
          v-for="(item, index) in content.navLeft"
          :key="index + 'navLeft'"
          tag="div"
          type="text"
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="item.content"
          :editable="editable"
          @value="item.content = $event"
        />
        <editable-content
          tag="div"
          type="image"
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="content.logo"
          :editable="editable"
          @value="content.logo = $event"
        />
        <editable-content
          v-for="(item, index) in content.navRight"
          :key="index + 'navRight'"
          tag="div"
          type="text"
          class="level-item has-text-centered"
          :class="`has-text-${color}-invert`"
          :value="item.content"
          :editable="editable"
          @value="item.content = $event"
        />
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
