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
              <article class="media">
                <figure class="media-left">
                  <editable-image
                    tag="div"
                    type="image"
                    class="image is-64x64"
                    :value="item.image"
                    :editable="editable"
                    @value="item.image = $event"
                  />
                </figure>
                <div class="media-content">
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
                    :value="item.content"
                    :editable="editable"
                    @value="item.content = $event"
                  />
                </div>
              </article>
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
export default class FeatureIconThreeColumnsMedia extends mixins(
  HtmlBlockMixin
) {}
</script>
