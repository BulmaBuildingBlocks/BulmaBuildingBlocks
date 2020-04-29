import { Component, Vue, PropSync, Prop } from 'nuxt-property-decorator';
import EditableContent from '~/components/editor/text/EditableContent.vue';
import EditableImage from '~/components/editor/image/Image.vue';
import EditableLink from '~/components/editor/link/Link.vue';
import { Block } from '~/types/Block';

@Component({
  components: {
    EditableContent,
    EditableImage,
    EditableLink
  }
})
export default class HtmlBlockMixin extends Vue {
  @Prop(Boolean) editable!: boolean;
  @PropSync('block', { type: Object }) newBlock!: Block;

  get content() {
    return this.newBlock.content;
  }

  get color() {
    return this.newBlock.color;
  }

  get container() {
    return this.newBlock.container;
  }
}
