import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class HtmlSnippetMixin extends Vue {
  @Prop(String) color!: string;
  @Prop(Boolean) container!: boolean;
}
