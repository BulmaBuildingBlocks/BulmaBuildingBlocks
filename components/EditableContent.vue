<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import Vue, { CreateElement, VNode } from 'vue';
import StaticContent from '~/components/StaticContent.vue';
import WiziwigContent from '~/components/WiziwigContent.vue';

@Component
export default class EditableContent extends Vue {
  @Prop(String) value!: string;
  @Prop(String) tag!: string;
  @Prop(Boolean) editable!: boolean;

  render(h: CreateElement): VNode {
    return h(this.editable ? WiziwigContent : StaticContent, {
      attrs: this.$attrs,
      props: {
        value: this.value,
        tag: this.tag
      }
    });
  }
}
</script>
