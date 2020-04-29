<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue, { CreateElement, VNode, RenderContext } from 'vue';
import StaticContent from '~/components/editor/text/StaticContent.vue';
import EditableText from '~/components/editor/text/EditableText.vue';

@Component({
  functional: true
} as any)
export default class EditableContent extends Vue {
  render(h: CreateElement, context: RenderContext): VNode {
    function appropriateEditableElement() {
      if (context.props && context.props.editable) return EditableText;

      return StaticContent;
    }

    return h(appropriateEditableElement(), context.data);
  }
}
</script>
