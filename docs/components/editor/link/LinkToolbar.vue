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
      <b-field label="Type">
        <b-select v-model="newValue.linkType">
          <option v-for="(option, key) in LinkType" :key="key" :value="option">
            {{ key }}
          </option>
        </b-select>
      </b-field>

      <b-field label="Color">
        <color-picker
          :color="newValue.status"
          @color="newValue.status = $event"
        />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator';
import { EditableLinkProps, LinkType } from '~/components/editor/link/types';
import ColorPicker from '~/components/ColorPicker.vue';

/***
 * Editing Features:
 * Upload and replace image
 * Alt tag
 * Link
 */

@Component({
  components: {
    ColorPicker
  }
})
export default class LinkToolbar extends Vue {
  @PropSync('value', { type: Object }) newValue!: EditableLinkProps;

  LinkType = LinkType;

  closeModal() {
    this.$emit('closeModal');
  }
}
</script>
