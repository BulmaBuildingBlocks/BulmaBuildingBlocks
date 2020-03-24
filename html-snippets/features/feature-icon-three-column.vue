<template>
  <section class="section is-large has-text-centered" :class="`has-background-${color}`">
    <div :class="container ? 'container' : ''">
      <h2 class="title block is-large" :class="color ? `has-text-${color}-invert` : ''">Features</h2>
      <div class="columns is-centered">
        <div class="column is-10">
          <div class="columns is-centered is-multiline">
            <div
              v-for="(item, index) in 3"
              :key="item"
              class="column is-6 is-4-widescreen block"
              :class="`has-text-${color}-invert`"
            >
              <div class="level">
                <div class="level-item">
                  <div class="image is-128x128">
                    <img :src="require(`../../assets/icons/${index + 1}.svg`)" />
                  </div>
                </div>
              </div>
              <h3 class="label" :class="`has-text-${color}-invert`">Feature {{ index + 1 }}</h3>
              <p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>
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
export default class FeatureIconThreeColumns extends mixins(HtmlSnippetMixin) {
  content = [
    {
      title: ''
    }
  ];
}
</script>
