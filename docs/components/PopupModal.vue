<template>
  <span>
    <span v-if="show" class="popup">
      <slot />
    </span>
    <slot name="reference" />
  </span>
</template>

<script lang="ts">
import { createPopper, Instance, Options } from '@popperjs/core';
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import { VNode } from 'vue';

@Component
export default class PopupModal extends Vue {
  @Prop({ type: Object, default: {} }) options!: object;
  @Prop({ default: () => false }) show!: boolean;

  popperInstance?: Instance = undefined;
  popperOptions: Options = {
    strategy: 'absolute',
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 5
        }
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'right', 'left']
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false
        }
      }
    ]
  };

  referenceElm?: HTMLElement = undefined;
  content?: HTMLElement = undefined;

  $scopedSlots!: {
    reference: () => VNode[];
    default: () => VNode[];
  };

  @Watch('show', { immediate: true })
  async onShowPopperChange(show: boolean) {
    if (show) {
      await this.$nextTick();
      this.showPopup();
    } else {
      this.hidePopup();
    }
  }

  created() {
    this.popperOptions = Object.assign(this.popperOptions, this.options);
  }

  async showPopup() {
    this.referenceElm = (await this.$scopedSlots.reference()[0]
      .elm) as HTMLElement;
    this.content = (await this.$scopedSlots.default()[0].elm) as HTMLElement;

    if (this.referenceElm && this.content) {
      this.popperInstance = createPopper(
        this.referenceElm,
        this.content,
        this.popperOptions
      );

      await this.popperInstance.update();
    }
  }

  hidePopup() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = undefined;
    }
  }
}
</script>
