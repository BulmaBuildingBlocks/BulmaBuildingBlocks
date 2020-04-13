<template>
  <div
    class="section is-large has-text-centered"
    :class="color ? `has-background-${color}` : ''"
  >
    <div class="container">
      <editable-content
        tag="h2"
        type="title"
        class="title"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
      <editable-content
        tag="h2"
        type="title"
        class="subtitle"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.subtitle"
        :editable="editable"
        @value="content.subtitle = $event"
      />
      <div class="buttons is-centered">
        <editable-link
          v-for="(item, index) in content.navButtons"
          :key="index"
          class="control"
          :value="item"
          :editable="editable"
          @value="item = $event"
        />
      </div>
      <div class="columns is-centered">
        <div class="column is-9-desktop is-7-widescreen">
          <editable-image
            class="image is-3by2 is-contained"
            :value="content.image"
            :editable="editable"
            @value="content.image = $event"
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
export default class ContentSingleImage extends mixins(HtmlBlockMixin) {}
</script>
