<template>
  <section class="example-section">
    <div class="container">
      <div class="example-section__info section">
        <div class="level">
          <div class="level-left">
            <p :id="`${slugifiedTitle}`" class="title is-4">
              <nuxt-link v-if="title" :to="`#${slugifiedTitle}`">#</nuxt-link>
              {{ title }}
            </p>
          </div>
          <div class="level-right">
            <div v-if="container" class="level-item">
              <b-field label="Container Applied" custom-class="is-small" horizontal>
                <b-switch v-model="containerValue" @input="updateRefs" />
              </b-field>
            </div>
            <div v-if="newColor" class="level-item">
              <b-field label="Background Color" custom-class="is-small" horizontal>
                <b-select v-model="newColor" size="is-small" placeholder="Select a color" @input="updateRefs">
                  <option v-for="option in statuses" :key="option" :value="option">
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
            </div>
            <div class="level-item">
              <button class="button is-small is-primary copy-code" @click="copyCode">Copy</button>
            </div>
          </div>
        </div>

        <div v-if="this.$slots.default" class="content">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="component" class="example">
      <div class="button-container">
        <!--  <CodepenEdit :code="code" :title="title"/>-->
      </div>
      <div class="example__container">
        <div class="example-component">
          <component :is="component" ref="componenthtml" :color="newColor" :container="containerValue" />
        </div>
        <div class="container is-fullwidth">
          <CodeView :code.sync="code" bordered codepen />
        </div>
      </div>
    </div>
    <hr class="is-medium" />
  </section>
</template>

<script lang="ts">
// import CodepenEdit from './CodepenEdit';
import { Prop, Vue, Component } from 'nuxt-property-decorator';
import prettier from 'prettier/standalone';
import CodeView from './CodeView.vue';
import { prettierConf, statusColors } from '~/shared/config';

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
  @Prop(Boolean) container!: boolean;
  @Prop(String) color!: string;

  $refs!: any;

  code = '';
  newColor = this.color || '';
  containerValue = true;
  statuses = statusColors;

  updateRefs() {
    this.$nextTick(() => {
      this.code = prettier.format(this.$refs.componenthtml.$el.outerHTML, prettierConf);
    });
  }

  mounted() {
    this.updateRefs();
  }

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
