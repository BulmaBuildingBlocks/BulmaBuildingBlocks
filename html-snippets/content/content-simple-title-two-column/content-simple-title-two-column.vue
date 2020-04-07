<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <editable-content
        tag="h2"
        type="title"
        class="title has-text-centered"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
      <div class="content is-medium">
        <div class="columns">
          <div v-for="(item, index) in content.paragraphs" :key="index" class="column">
            <editable-content
              tag="div"
              type="text"
              class="content"
              :class="color ? `has-text-${color}-invert` : ''"
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
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class ContentTitleTwoColumn extends mixins(HtmlSnippetMixin) {}
</script>
