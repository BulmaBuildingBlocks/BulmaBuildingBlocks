<script lang="ts">
import { CreateElement } from 'vue';
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import ImageToolbar from './ImageToolbar.vue';
import PopupModal from '~/components/PopupModal.vue';

import { EditableImageProps } from '~/components/editor/image/types';
import ClickOutside from '~/directives/click-outside';

/***
 * Editting Features:
 * Upload and replace image
 * Alt tag
 * Link
 */

@Component({
  directives: {
    ClickOutside
  }
})
export default class EditableImage extends Vue {
  @Prop(Boolean) editable!: boolean;
  @PropSync('value', { type: Object }) newValue!: EditableImageProps;

  modalOpen = false;

  toggleModal(event: Event) {
    event.preventDefault();

    this.modalOpen = !this.modalOpen;
  }

  closeModal() {
    this.modalOpen = false;
  }

  render(createElement: CreateElement) {
    const image = createElement('img', {
      attrs: {
        src: this.newValue.src,
        alt: this.newValue.alt,
        width: this.newValue.width,
        height: this.newValue.height
      },
      on: {
        click: this.toggleModal
      }
    });

    const imageWithLink = createElement(
      'a',
      {
        attrs: {
          href: this.newValue.href
        }
      },
      [image]
    );

    const imageToolbar = createElement(ImageToolbar, {
      props: {
        value: this.newValue
      },
      on: {
        closeModal: () => {
          this.closeModal();
        },
        'update:value': (value: EditableImageProps) => {
          this.newValue = value;
        }
      }
    });

    const popupModal = createElement(PopupModal, {
      scopedSlots: {
        reference: () => {
          return this.newValue.href ? imageWithLink : image;
        },
        default: () => {
          return imageToolbar;
        }
      },
      directives: [
        {
          name: 'click-outside',
          value: { handler: this.closeModal }
        }
      ],
      props: {
        show: this.editable && this.modalOpen,
        options: {
          placement: this.newValue.popupPlacement || 'right'
        },
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['left', 'top', 'right', 'bottom']
            }
          }
        ]
      }
    });

    return popupModal;
  }
}
</script>
