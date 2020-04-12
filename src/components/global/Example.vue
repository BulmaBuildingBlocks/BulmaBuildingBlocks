<template>
  <section class="example-section">
    <div class="container">
      <div class="example-section__info section">
        <div class="level">
          <div class="level-left">
            <p :id="`${slugifiedTitle}`" class="title is-4">
              <nuxt-link v-if="block.title" :to="`#${slugifiedTitle}`">
                # {{ block.title }}
              </nuxt-link>
            </p>
          </div>
          <div class="level-right">
            <div class="level-item">
              <b-field
                label="Container Applied"
                custom-class="is-small"
                horizontal
              >
                <b-switch v-model="block.container" @input="updateRefs" />
              </b-field>
            </div>
            <div v-if="block.color" class="level-item">
              <b-field
                label="Background Color"
                custom-class="is-small"
                horizontal
              >
                <b-select
                  v-model="block.color"
                  size="is-small"
                  placeholder="Select a color"
                  @input="updateRefs"
                >
                  <option
                    v-for="option in statuses"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
            </div>
            <div class="level-item">
              <button
                class="button is-small is-primary copy-code"
                @click="copyCode"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div v-if="this.$slots.default" class="content">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="block.component" class="example">
      <div class="button-container">
        <!--  <CodepenEdit :code="code" :title="title"/>-->
      </div>
      <div class="example__container">
        <div class="example-component">
          <component :is="block.component" ref="componenthtml" :block="block" />
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
import clipboard from 'copy-to-clipboard';
import CodeView from './CodeView.vue';
import { prettierConf, statusColors } from '~/shared/config';
import { Block } from '~/types/Block';
import slugifyString from '~/shared/slugifyString';

@Component({
  components: {
    // CodepenEdit
    CodeView
  }
})
export default class Example extends Vue {
  @Prop([Object]) block!: Block;

  $refs!: {
    componenthtml: Vue;
  };

  code = '';
  statuses = statusColors;

  updateRefs(): void {
    this.$nextTick(() => {
      this.code = prettier.format(
        this.$refs.componenthtml.$el.outerHTML,
        prettierConf
      );
    });
  }

  mounted(): void {
    this.updateRefs();
  }

  async copyCode(): Promise<void> {
    try {
      await clipboard(this.code);
      this.$buefy.toast.open('Copied to clipboard!');
    } catch (e) {
      this.$buefy.toast.open({
        message: 'Error while copying to clipboard :(',
        type: 'is-danger'
      });
    }
  }

  get slugifiedTitle(): string {
    if (!this.block.title) return '';
    return slugifyString(this.block.title);
  }
}
</script>
