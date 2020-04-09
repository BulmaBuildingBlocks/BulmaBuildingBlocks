<template>
  <span class="is-relative">
    <span v-show="show" class="popper">
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
          fallbackPlacements: ['bottom']
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

  $slots!: {
    reference: VNode[];
    default: VNode[];
  };

  @Watch('show')
  onShowPopperChange(show: boolean) {
    if (show) {
      console.log('hi');
      this.showPopup();
    } else {
      console.log('bye');
      this.hidePopup();
    }
  }

  created() {
    this.popperOptions = Object.assign(this.popperOptions, this.options);
  }

  mounted() {
    this.referenceElm = this.$slots.reference[0].elm as HTMLElement;
    this.content = this.$slots.default[0].elm as HTMLElement;
  }

  async showPopup() {
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
