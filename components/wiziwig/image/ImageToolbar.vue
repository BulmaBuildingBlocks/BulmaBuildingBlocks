<template>
  <div class="image-toolbar card">
    <header class="card-header">
      <p class="card-header-title">
        Image Configuration
      </p>
      <a class="card-header-icon" aria-label="close" @click="closeModal">
        <b-icon pack="fa" icon="times" />
      </a>
    </header>
    <div class="card-content">
      <b-field label="Image Url" placeholder="http://">
        <b-input v-model="newValue.src" />
      </b-field>
      <b-field label="Description">
        <b-input v-model="newValue.alt" />
      </b-field>
      <b-field label="Image Link">
        <b-input v-model="newValue.href" />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  PropSync
} from '~/node_modules/nuxt-property-decorator';
import { EditableImageProps } from '~/components/wiziwig/image/types';

/***
 * Editting Features:
 * Upload and replace image
 * Alt tag
 * Link
 */

@Component
export default class ImageToolbar extends Vue {
  @PropSync('value', { type: Object }) newValue!: EditableImageProps;

  closeModal() {
    this.$emit('closeModal');
  }
}
</script>
