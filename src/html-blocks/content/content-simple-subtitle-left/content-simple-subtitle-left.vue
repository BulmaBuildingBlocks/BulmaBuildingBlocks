<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <div class="columns">
        <div class="column is-9-desktop is-7-widescreen">
          <editable-content
            tag="h3"
            type="text"
            class="subtitle"
            :class="color ? `has-text-${color}-invert` : ''"
            :value="content.subtitle"
            :editable="editable"
            @value="content.subtitle = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class ContentSubtitleLeft extends mixins(HtmlBlockMixin) {}
</script>
