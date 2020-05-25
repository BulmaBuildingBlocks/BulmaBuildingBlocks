<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="has-text-centered" :class="container ? 'container' : ''">
      <div class="columns is-centered">
        <div class="column is-9-desktop is-6-widescreen">
          <editable-content
            tag="h3"
            type="text"
            class="subtitle"
            :class="color ? `has-text-${color}-invert` : ''"
            :value="content.subtitle"
            :editable="editable"
            @value="content.subtitle = $event"
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class CallToActionSimpleSubtitle extends mixins(
  HtmlBlockMixin
) {}
</script>
