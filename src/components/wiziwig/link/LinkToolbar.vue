<template>
  <div class="image-toolbar card">
    <header class="card-header">
      <p class="card-header-title">
        Configuration
      </p>
      <a class="card-header-icon" aria-label="close" @click="closeModal">
        <b-icon pack="fa" icon="times" />
      </a>
    </header>
    <div class="card-content">
      <b-field label="Label" placeholder="http://">
        <b-input v-model="newValue.label" />
      </b-field>
      <b-field label="Link">
        <b-input v-model="newValue.href" />
      </b-field>
      <b-field label="Class">
        <b-input v-model="newValue.styles" />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator';
import { EditableLinkProps } from '~/components/wiziwig/link/types';

/***
 * Editing Features:
 * Upload and replace image
 * Alt tag
 * Link
 */

@Component
export default class LinkToolbar extends Vue {
  @PropSync('value', { type: Object }) newValue!: EditableLinkProps;

  closeModal() {
    this.$emit('closeModal');
  }
}
</script>
