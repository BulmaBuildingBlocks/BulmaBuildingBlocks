// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Node } from 'tiptap';
import { nodeInputRule } from 'tiptap-commands';

/**
 * Matches following attributes in Markdown-typed image: [, alt, src, title]
 *
 * Example:
 * ![Lorem](image.jpg) -> [, "Lorem", "image.jpg"]
 * ![](image.jpg "Ipsum") -> [, "", "image.jpg", "Ipsum"]
 * ![Lorem](image.jpg "Ipsum") -> [, "Lorem", "image.jpg", "Ipsum"]
 */
const IMAGE_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export default class Image extends Node {
  get name() {
    return 'image';
  }

  get schema() {
    return {
      inline: true,
      attrs: {
        src: {},
        alt: {
          default: null
        },
        title: {
          default: null
        },
        style: {
          default: null
        }
      },
      group: 'inline',
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: (dom: HTMLElement) => {
            return {
              src: dom.getAttribute('src'),
              title: dom.getAttribute('title'),
              alt: dom.getAttribute('alt'),
              style: dom.getAttribute('style') || ''
            };
          }
        }
      ],
      toDOM: (node: { attrs: any }) => ['img', node.attrs]
    };
  }

  commands({ type }: any) {
    return (attrs: any) => (state: any, dispatch: any) => {
      const { selection } = state;
      const position = selection.$cursor
        ? selection.$cursor.pos
        : selection.$to.pos;
      const node = type.create(attrs);
      const transaction = state.tr.insert(position, node);
      dispatch(transaction);
    };
  }

  inputRules({ type }: any) {
    return [
      nodeInputRule(IMAGE_INPUT_REGEX, type, (match: any) => {
        const [, alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      })
    ];
  }
}
