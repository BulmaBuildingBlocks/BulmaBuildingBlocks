<template>
  <div class="codeview">
    <div v-if="title" class="codeview-title">{{ title }}</div>
    <figure class="highlight" :class="figureClasses">
      <div class="button-container buttons">
        <button class="button is-primary is-small copy-code" @click="copyCode">Copy</button>
        <button class="button is-small" @click="isExpanded = !isExpanded">
          {{ !isExpanded ? 'Show' : 'Hide' }}
        </button>
      </div>
      <pre v-highlightjs="code"><code :class="lang"/></pre>
      <button v-if="!isExpanded && !expanded" class="codeview-showcode" @click="isExpanded = true">
        <b-icon icon="code-tags" size="is-small" custom-class="mdi-18px" />
        <span>Show code</span>
      </button>
      <button v-if="!expanded" class="codeview-hidecode" @click="isExpanded = false">
        <b-icon icon="eye-off-outline" size="is-small" custom-class="mdi-18px" />
        <span>Hide code</span>
      </button>
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class CodeView extends Vue {
  @Prop({ default: 'html' }) lang!: string;
  @Prop(Boolean) bordered!: boolean;
  @Prop(String) code!: string;
  @Prop(Boolean) expanded!: boolean;
  @Prop(String) title!: string;

  isExpanded = false;

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

  get figureClasses() {
    return {
      'is-collapsed': !this.bordered && !this.expanded,
      'is-expanded': this.isExpanded || this.expanded
    };
  }
}
</script>
