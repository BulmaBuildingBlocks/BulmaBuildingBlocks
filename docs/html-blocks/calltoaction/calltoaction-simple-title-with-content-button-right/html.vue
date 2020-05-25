<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div :class="container ? 'container' : ''">
      <div class="columns is-vcentered">
        <div class="column is-8">
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
            tag="div"
            type="text"
            class="content"
            :class="color ? `has-text-${color}-invert` : ''"
            :value="content.paragraphs"
            :editable="editable"
            @value="content.paragraphs = $event"
          />
        </div>
        <div class="column">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class CallToActionSimpleTitleWithContentButtonRight extends mixins(
  HtmlBlockMixin
) {}
</script>
