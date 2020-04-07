<template>
  <component :is="tag" v-bind="$attrs" class="editor" :class="typeClass">
    <editor-menu-bar v-slot="{ commands, isActive, focused, getMarkAttrs }" :editor="editor">
      <div class="menubar is-hidden" :class="{ 'is-focused': focused }">
        <form
          v-if="linkMenuIsActive"
          class="field is-marginless has-addons is-fullwidth"
          @submit.prevent="setLinkUrl(commands.link, linkUrl)"
        >
          <div class="control">
            <button class="button" type="button" @click="hideLinkMenu">
              <b-icon pack="fa" icon="angle-left" />
            </button>
          </div>
          <div class="control is-expanded">
            <input
              ref="linkInput"
              v-model="linkUrl"
              class="input"
              type="text"
              placeholder="https://"
              @keydown.esc="clearLinkMenu"
            />
          </div>
          <div class="control">
            <button class="button" type="button" @click="setLinkUrl(commands.link, null)">
              <b-icon pack="fa" icon="trash" />
            </button>
          </div>
        </form>

        <div v-else class="buttons has-addons">
          <template v-if="type === 'text'">
            <button class="button is-small is-white" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
              <b-icon pack="fa" icon="bold" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >
              <b-icon pack="fa" icon="italic" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.strike() }"
              @click="commands.strike"
            >
              <b-icon pack="fa" icon="strikethrough" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >
              <b-icon pack="fa" icon="underline" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
            >
              <span class="icon">
                H1
              </span>
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              <span class="icon">
                H2
              </span>
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              <span class="icon">
                H3
              </span>
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
            >
              <b-icon pack="fa" icon="list" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
            >
              <b-icon pack="fa" icon="list-ol" />
            </button>

            <button
              class="button is-small is-white"
              :class="{ 'is-active': isActive.blockquote() }"
              @click="commands.blockquote"
            >
              <b-icon pack="fa" icon="quote-left" />
            </button>

            <button class="button is-small is-white" :class="{ 'is-active': isActive.code() }" @click="commands.code">
              <b-icon pack="fa" icon="code" />
            </button>
          </template>

          <button class="button is-small is-white" @click="showImagePrompt(commands.image)">
            <b-icon pack="fa" icon="image" />
          </button>

          <button
            class="button is-small is-white"
            :class="{ 'is-active': isActive.link() }"
            @click="showLinkMenu(getMarkAttrs('link'))"
          >
            <b-icon pack="fa" icon="link" />
            <span>{{ isActive.link() ? 'Update Link' : 'Add Link' }}</span>
          </button>

          <button class="button is-small is-white" @click="commands.undo">
            <b-icon pack="fa" icon="undo" />
          </button>

          <button class="button is-small is-white" @click="commands.redo">
            <b-icon pack="fa" icon="redo" />
          </button>
        </div>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </component>
</template>

<script lang="ts">
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  Bold,
  Code,
  Italic,
  Strike,
  Underline,
  History
} from 'tiptap-extensions';
import Link from '~/components/wiziwig/prosemirror-marks/Link';
import Image from '~/components/wiziwig/prosemirror-marks/Image';
import { Vue, Component, Prop } from '~/node_modules/nuxt-property-decorator';

@Component({
  components: {
    EditorContent,
    EditorMenuBar
  }
})
export default class WiziwigContent extends Vue {
  @Prop(String) value!: string;
  @Prop(String) tag!: string;
  @Prop(String) type!: string;
  @Prop(Boolean) editable!: boolean;

  linkUrl?: string = undefined;
  linkMenuIsActive = false;

  $refs!: {
    linkInput: HTMLInputElement;
  };

  get typeClass(): string {
    return `is-${this.type}`;
  }

  editor = new Editor({
    extensions: [
      new Blockquote(),
      new BulletList(),
      new CodeBlock(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3] }),
      new ListItem(),
      new OrderedList(),
      new Image(),
      new Link(),
      new Bold(),
      new Code(),
      new Italic(),
      new Strike(),
      new Underline(),
      new History()
    ],
    content: this.value,
    onUpdate: this.updateValue
  });

  showLinkMenu(attrs: HTMLLinkElement): void {
    this.linkUrl = attrs.href;
    this.linkMenuIsActive = true;
    this.$nextTick(() => {
      this.$refs.linkInput.focus();
    });
  }

  showImagePrompt(command: Function): void {
    const src = prompt('Enter the url of your image here');
    if (src !== null) {
      command({ src });
    }
  }

  clearLinkMenu(): void {
    this.linkUrl = '';
  }

  hideLinkMenu(): void {
    this.linkMenuIsActive = false;
    this.editor.focus();
  }

  setLinkUrl(command: Function, url: string): void {
    command({ href: url });
    this.hideLinkMenu();
  }

  beforeDestroy(): void {
    this.editor.destroy();
  }

  updateValue({ getHTML }: { [x: string]: Function }): void {
    // get new content on update
    const html = getHTML();
    this.$emit('value', html);
  }
}
</script>
