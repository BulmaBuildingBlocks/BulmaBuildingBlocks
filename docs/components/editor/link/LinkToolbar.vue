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
        <b-dropdown class="color-selector" trap-focus aria-role="list">
          <button slot="trigger" class="button is-marginless">
            <b-icon pack="fa" icon="fill-drip" />
          </button>

          <b-dropdown-item
            v-for="(name, status) in statuses"
            :key="status"
            aria-role="listitem"
            class="color-selector__item"
            @click="setColor(status)"
          >
            <div class="level is-fullwidth">
              <div class="level-left">
                <div class="level-item">
                  <span>{{ name }}</span>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <b-icon
                    pack="fa"
                    icon="circle"
                    :class="`has-text-${status}`"
                  />
                </div>
              </div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator';
import { EditableLinkProps, LinkType } from '~/components/editor/link/types';
import { statusColorClasses, Status } from '~/shared/config';

/***
 * Editing Features:
 * Upload and replace image
 * Alt tag
 * Link
 */

@Component
export default class LinkToolbar extends Vue {
  @PropSync('value', { type: Object }) newValue!: EditableLinkProps;

  statuses = statusColorClasses;
  LinkType = LinkType;

  setColor(status: Status) {
    this.newValue.styles = status;
  }

  closeModal() {
    this.$emit('closeModal');
  }
}
</script>
