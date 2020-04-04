import { Component, Prop, Vue } from 'nuxt-property-decorator';
import EditableContent from '~/components/EditableContent.vue';

@Component({
  components: {
    EditableContent
  }
})
export default class HtmlSnippetMixin extends Vue {
  @Prop([Object, Array]) content!: object | [];
  @Prop(String) color!: string;
  @Prop({ default: () => true }) container!: boolean;
  @Prop(Boolean) editable!: boolean;
}
