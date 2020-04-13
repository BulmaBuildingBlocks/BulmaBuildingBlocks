<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container has-text-centered">
      <editable-content
        tag="h2"
        type="title"
        class="title is-spaced"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class ContentTitle extends mixins(HtmlBlockMixin) {}
</script>
