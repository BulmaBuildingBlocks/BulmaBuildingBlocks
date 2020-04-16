<template>
  <footer class="footer" :class="color ? `has-background-${color}` : ''">
    <editable-content
      tag="div"
      type="text"
      class="content has-text-centered"
      :class="color ? `has-text-${color}-invert` : ''"
      :value="content.title"
      :editable="editable"
      @value="content.title = $event"
    />
  </footer>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class FooterSimple extends mixins(HtmlBlockMixin) {}
</script>
