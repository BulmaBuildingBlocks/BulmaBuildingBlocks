<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="has-text-centered" :class="container ? 'container' : ''">
      <editable-content
        tag="h2"
        type="title"
        class="title is-spaced"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
      <div class="buttons is-centered">
        <editable-link
          v-for="(item, index) in content.buttons"
          :key="index"
          class="control"
          :value="item"
          :editable="editable"
          @value="item = $event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class ContentTitle extends mixins(HtmlBlockMixin) {}
</script>
