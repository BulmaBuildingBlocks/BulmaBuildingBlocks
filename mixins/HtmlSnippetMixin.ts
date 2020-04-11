import { Component, Vue, PropSync, Prop } from 'nuxt-property-decorator';
import EditableContent from '~/components/wiziwig/text/EditableContent.vue';
import EditableImage from '~/components/wiziwig/image/Image.vue';
import EditableLink from '~/components/wiziwig/link/Link.vue';
import { Snippet } from '~/types/Snippet';

@Component({
  components: {
    EditableContent,
    EditableImage,
    EditableLink
  }
})
export default class HtmlSnippetMixin extends Vue {
  @Prop(Boolean) editable!: boolean;
  @PropSync('snippet', { type: Object }) newSnippet!: Snippet;

  get content() {
    return this.newSnippet.content;
  }

  get color() {
    return this.newSnippet.color;
  }

  get container() {
    return this.newSnippet.container || true;
  }
}
