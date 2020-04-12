<template>
  <section
    class="section is-large has-text-centered"
    :class="`has-background-${color}`"
  >
    <div :class="container ? 'container' : ''">
      <editable-content
        tag="h2"
        type="title"
        class="title block is-large"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
      <div class="columns is-centered">
        <div class="column is-10">
          <div class="columns is-centered is-multiline">
            <div
              v-for="(item, index) in content.items"
              :key="index"
              class="column is-6 is-4-widescreen"
              :class="`has-text-${color}-invert`"
            >
              <editable-image
                class="image is-3by2 is-covered is-fullwidth has-radius block"
                :value="item.image"
                :editable="editable"
                @value="item.image = $event"
              />
              <editable-content
                tag="h3"
                type="title"
                class="label"
                :class="`has-text-${color}-invert`"
                :value="item.title"
                :editable="editable"
                @value="item.title = $event"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class FeatureImagesThreeColumns extends mixins(
  HtmlSnippetMixin
) {}
</script>
