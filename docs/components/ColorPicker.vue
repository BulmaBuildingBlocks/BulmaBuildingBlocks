<template>
  <b-dropdown
    class="color-selector"
    trap-focus
    aria-role="list"
    :append-to-body="appendToBody"
  >
    <button slot="trigger" class="button is-marginless" :class="[size]">
      <b-icon pack="fa" icon="fill-drip" />
    </button>

    <b-dropdown-item
      v-for="(name, status) in statuses"
      :key="name"
      :value="name"
      aria-role="listitem"
      class="color-selector__item"
      @click="setColor(name)"
    >
      <div class="level is-fullwidth">
        <div class="level-left">
          <div class="level-item">
            <span>{{ status }}</span>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-icon pack="fa" icon="circle" :class="`has-text-${name}`" />
          </div>
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Status } from '~/shared/config';

@Component
export default class ColorPicker extends Vue {
  @Prop({ default: '' }) color!: string;
  @Prop(Boolean) appendToBody!: boolean;
  @Prop(String) size!: string;

  statuses = Status;

  newColor = this.color;

  setColor(status: string) {
    this.newColor = status;
    this.$emit('color', this.newColor);
  }
}
</script>
