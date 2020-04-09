<template>
  <span class="is-relative">
    <transition name="fade">
      <span v-show="show" class="popper">
        <slot />
      </span>
    </transition>
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

  $slots!: {
    reference: VNode[];
    default: VNode[];
  };

  @Watch('show')
  async onShowPopperChange() {
    if (this.popperInstance) {
      await this.popperInstance.update();
    }
  }

  created() {
    this.popperOptions = Object.assign(this.popperOptions, this.options);
  }

  mounted() {
    const referenceElm = this.$slots.reference[0].elm as HTMLElement;
    const popper = this.$slots.default[0].elm as HTMLElement;

    this.popperInstance = createPopper(
      referenceElm,
      popper,
      this.popperOptions
    );
  }

  destroy() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = undefined;
    }
  }
}
</script>
