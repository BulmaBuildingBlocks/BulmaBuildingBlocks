import { Component, Prop, Vue } from 'nuxt-property-decorator';
import EditableContent from '~/components/wiziwig/text/EditableContent.vue';
import EditableImage from '~/components/wiziwig/image/Image.vue';
import EditableLink from '~/components/wiziwig/link/Link.vue';

@Component({
  components: {
    EditableContent,
    EditableImage,
    EditableLink
  }
})
export default class HtmlSnippetMixin extends Vue {
  @Prop([Object, Array]) content!: object | [];
  @Prop(String) color!: string;
  @Prop({ default: () => true }) container!: boolean;
  @Prop(Boolean) editable!: boolean;
}
