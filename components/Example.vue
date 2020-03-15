<template>
  <section class="example-section">
    <p :id="`${slugifiedTitle}`" class="title is-4">
      <nuxt-link v-if="title" :to="`#${slugifiedTitle}`">#</nuxt-link>
      {{ title }}
    </p>
    <div class="content">
      <slot />
    </div>
    <div class="level">
      <div class="level-left"></div>
      <div class="level-right">
        <div v-if="newColor" class="level-item">
          <b-field label="Status Color" horizontal>
            <b-select v-model="newColor" placeholder="Select a color" @input="updateRefs">
              <option v-for="option in statuses" :key="option" :value="option">
                {{ option }}
              </option>
            </b-select>
          </b-field>
        </div>
      </div>
    </div>

    <div v-if="component" class="example" :class="{ 'is-vertical': vertical }">
      <div class="button-container">
        <!--  <CodepenEdit :code="code" :title="title"/>-->
      </div>
      <div ref="componenthtml" class="example-component" :class="{ 'is-paddingless': paddingless }">
        <component :is="component" ref="foo" :color="newColor" />
      </div>
      <CodeView :code.sync="code" bordered codepen />
    </div>
    <hr class="is-medium" />
  </section>
</template>

<script lang="ts">
// import CodepenEdit from './CodepenEdit';
import { Prop, Vue, Component } from 'nuxt-property-decorator';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import CodeView from './CodeView.vue';
import { statusColors } from '~/shared/config';

@Component({
  components: {
    // CodepenEdit
    CodeView
  }
})
export default class Example extends Vue {
  @Prop([Object, Function]) component!: object | Function;
  // @Prop(String) code!: string;
  @Prop(String) title!: string;
  @Prop(Boolean) paddingless!: boolean;
  @Prop(Boolean) vertical!: boolean;
  @Prop(String) color!: string;

  $refs!: any;

  code = '';
  newColor = this.color || '';
  statuses = statusColors;

  updateRefs() {
    this.$nextTick(() => {
      this.code = prettier.format(this.$refs.foo.$el.outerHTML, {
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

  mounted() {
    this.updateRefs();
  }

  get slugifiedTitle() {
    if (!this.title) return '';
    return this.title
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
}
</script>
