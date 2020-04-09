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
              class="column is-6 is-4-widescreen block"
              :class="`has-text-${color}-invert`"
            >
              <div class="level">
                <div class="level-item">
                  <editable-content
                    tag="div"
                    type="image"
                    class="image is-128x128"
                    :value="item.image"
                    :editable="editable"
                    @value="item.image = $event"
                  />
                </div>
              </div>
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
export default class FeatureIconThreeColumns extends mixins(HtmlSnippetMixin) {}
</script>
