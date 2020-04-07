// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { updateMark, removeMark, pasteRule } from 'tiptap-commands';
import { getMarkAttrs } from 'tiptap-utils';
import { Mark } from 'tiptap';
import { Plugin } from 'prosemirror-state';
import { MarkSpec } from 'prosemirror-model';

export default class Link extends Mark {
  get name(): string {
    return 'link';
  }

  get defaultOptions(): { openOnClick: true } {
    return {
      openOnClick: true
    };
  }

  get isAtom() {
    return true;
  }

  get schema(): MarkSpec {
    return {
      attrs: {
        href: {
          default: null
        },
        class: {
          default: ''
        },
        isolating: {
          default: true
        },
        atom: {
          default: true
        }
      },
      inclusive: false,
      parseDOM: [
        {
          tag: 'a[href]',
          getAttrs: (node) => {
            const dom: HTMLElement = node as HTMLElement;
            return {
              href: dom.getAttribute('href'),
              class: dom.classList
            };
          }
        }
      ],
      toDOM: (node: any) => {
        return [
          'a',
          {
            href: node.attrs.href,
            class: node.attrs.class,
            rel: 'noopener noreferrer nofollow'
          },
          0
        ];
      }
    };
  }

  commands({ type }: any) {
    return (attrs: any) => {
      if (attrs.href) {
        return updateMark(type, attrs);
      }

      return removeMark(type);
    };
  }

  pasteRules({ type }: any) {
    return [
      pasteRule(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-zA-Z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        type,
        (url: string) => ({ href: url })
      )
    ];
  }

  get plugins() {
    if (!this.options.openOnClick) {
      return [];
    }

    return [
      new Plugin({
        props: {
          handleClick: (view: any, pos: any, event: any) => {
            const { schema } = view.state;
            const attrs = getMarkAttrs(view.state, schema.marks.link);

            if (attrs.href && event.target instanceof HTMLAnchorElement) {
              event.stopPropagation();
              // window.open(attrs.href);
            }

            return true;
          }
        }
      })
    ];
  }
}
