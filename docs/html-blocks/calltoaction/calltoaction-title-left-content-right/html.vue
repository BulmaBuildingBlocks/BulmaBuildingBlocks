<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div :class="container ? 'container' : ''">
      <div class="columns">
        <div class="column is-6">
          <editable-content
            tag="h2"
            type="title"
            class="title"
            :class="color ? `has-text-${color}-invert` : ''"
            :value="content.title"
            :editable="editable"
            @value="content.title = $event"
          />
        </div>
        <div class="column">
          <editable-content
            tag="div"
            type="text"
            class="content"
            :class="color ? `has-text-${color}-invert` : ''"
            :value="content.paragraphs"
            :editable="editable"
            @value="content.paragraphs = $event"
          />
          <div class="buttons">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class CallToActionTitleLeftContent extends mixins(
  HtmlBlockMixin
) {}
</script>
