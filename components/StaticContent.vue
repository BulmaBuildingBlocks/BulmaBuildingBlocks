<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';

import Vue, { CreateElement, VNode } from 'vue';

@Component
export default class StaticContent extends Vue {
  @Prop(String) value!: string;
  @Prop(String) tag!: string;

  render(h: CreateElement): VNode {
    return h(this.tag, {
      domProps: {
        innerHTML: this.value
      }
    });
  }
}
</script>
