<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue, { CreateElement, VNode, RenderContext } from 'vue';
import StaticContent from '~/components/editor/content/StaticContent.vue';
import EditableText from '~/components/editor/content/WiziwigContent.vue';

@Component({
  functional: true
} as any)
export default class EditableContent extends Vue {
  render(h: CreateElement, context: RenderContext): VNode {
    return h(
      context.props && context.props.editable ? EditableText : StaticContent,
      context.data
    );
  }
}
</script>
