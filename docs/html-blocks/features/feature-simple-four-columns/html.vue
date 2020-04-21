<template>
  <section class="section is-large" :class="`has-background-${color}`">
    <div :class="container ? 'container' : ''">
      <editable-content
        tag="h2"
        type="title"
        class="title block is-large has-text-centered"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.title"
        :editable="editable"
        @value="content.title = $event"
      />
      <div class="columns is-centered">
        <div class="column is-12">
          <div class="columns is-multiline">
            <div
              v-for="(item, index) in content.items"
              :key="index"
              class="column is-6"
              :class="`has-text-${color}-invert`"
            >
              <editable-content
                tag="h3"
                type="title"
                class="label"
                :class="`has-text-${color}-invert`"
                :value="item.title"
                :editable="editable"
                @value="item.title = $event"
              />

              <editable-content
                tag="div"
                type="text"
                class="content"
                :class="`has-text-${color}-invert`"
                :value="item.content"
                :editable="editable"
                @value="item.content = $event"
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
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class FeatureSimpleSixColumns extends mixins(HtmlBlockMixin) {}
</script>
