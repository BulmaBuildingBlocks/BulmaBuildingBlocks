<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <editable-image
            class="image is-3by2 is-contained"
            :value="content.image"
            :editable="editable"
            @value="content.image = $event"
          />
        </div>
        <div class="column">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class FeatureBigImageLeft extends mixins(HtmlSnippetMixin) {}
</script>
