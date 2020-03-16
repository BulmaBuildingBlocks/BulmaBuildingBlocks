<template>
  <section id="page-builder" class="section page-builder">
    <div class="container block">
      <div class="level">
        <div class="level-left">
          <p class="title is-4">
            Page Builder
          </p>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-small is-primary copy-code" @click="copyCode">Copy</button>
          </div>
        </div>
      </div>
    </div>

    <div class="page-builder__container">
      <div class="columns is-gapless">
        <div class="column has-background-light">
          <draggable
            ref="componenthtml"
            class="dragArea list-group"
            :list="selectedComponents"
            group="content"
            @change="updateRefs"
          >
            <component :is="component.component" v-for="component in selectedComponents" :key="component.name" />
          </draggable>
        </div>
        <div class="column">
          <draggable
            class="dragArea list-group"
            :group="{ name: 'content', pull: 'clone', put: false, sort: false }"
            :sort="false"
            :list="components"
            @change="updateRefs"
          >
            <component :is="component.component" v-for="component in components" :key="component.name" />
          </draggable>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import draggable from 'vuedraggable';

import { Component, Vue } from 'nuxt-property-decorator';

import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

import headerComponents from '~/html-snippets/headers';
import featureComponents from '~/html-snippets/features';
import contentComponents from '~/html-snippets/content';

@Component({
  components: {
    draggable
  }
})
export default class HomePage extends Vue {
  components = [...headerComponents, ...featureComponents, ...contentComponents];
  selectedComponents = [];
  code = '';

  $refs!: any;

  async copyCode() {
    try {
      await this.$copyText(this.code).then(() => {
        this.$buefy.toast.open('Copied to clipboard!');
      });
    } catch (e) {
      this.$buefy.toast.open({
        message: 'Error while copying to clipboard :(',
        type: 'is-danger'
      });
    }
  }

  updateRefs() {
    this.$nextTick(() => {
      this.code = prettier.format(this.$refs.componenthtml.$el.innerHTML, {
        parser: 'html',
        semi: true,
        arrowParens: 'always',
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 120,
        htmlWhitespaceSensitivity: 'ignore',
        plugins: [parserHtml]
      });
    });
  }

  log(evt: string) {
    window.console.log(evt);
  }
}
</script>
