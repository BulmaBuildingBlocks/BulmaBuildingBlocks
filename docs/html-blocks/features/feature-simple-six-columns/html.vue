<template>
  <section
    class="section is-large has-text-centered"
    :class="`has-background-${color}`"
  >
    <div :class="container ? 'container' : ''">
      <div class="columns is-centered">
        <div class="column is-10">
          <div class="columns is-centered is-multiline">
            <div
              v-for="(item, index) in content.items"
              :key="index"
              class="column is-6 is-4-widescreen block"
              :class="color ? `has-text-${color}-invert` : ''"
            >
              <editable-content
                tag="h3"
                type="title"
                class="label"
                :class="color ? `has-text-${color}-invert` : ''"
                :value="item.title"
                :editable="editable"
                @value="item.title = $event"
              />

              <editable-content
                tag="div"
                type="text"
                class="content"
                :class="color ? `has-text-${color}-invert` : ''"
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
