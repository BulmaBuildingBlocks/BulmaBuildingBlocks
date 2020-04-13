<script lang="ts">
import { CreateElement } from 'vue';
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import ButtonToolbar from './LinkToolbar.vue';
import PopupModal from '~/components/global/PopupModal.vue';

import { EditableLinkProps } from '~/components/wiziwig/link/types';
import ClickOutside from '~/directives/click-outside';

/***
 * Editting Features:
 * Upload and replace button
 * Alt tag
 * Link
 */

@Component({
  directives: {
    ClickOutside
  }
})
export default class Link extends Vue {
  @Prop(Boolean) editable!: boolean;
  @PropSync('value', { type: Object }) newValue!: EditableLinkProps;

  modalOpen = false;

  toggleModal(event: Event) {
    event.preventDefault();

    this.modalOpen = !this.modalOpen;
  }

  openModal(event: Event) {
    event.preventDefault();

    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  render(createElement: CreateElement) {
    const button = createElement(
      'a',
      {
        class: this.newValue.styles,
        on: {
          click: this.toggleModal
        },
        attrs: {
          href: this.newValue.href
        }
      },
      this.newValue.label
    );

    const buttonToolbar = createElement(ButtonToolbar, {
      props: {
        value: this.newValue
      },
      on: {
        click: this.toggleModal,
        closeModal: () => {
          this.closeModal();
        },
        'update:value': (value: EditableLinkProps) => {
          this.newValue = value;
        }
      }
    });

    const popupModal = createElement(PopupModal, {
      scopedSlots: {
        reference: () => {
          return button;
        },
        default: () => {
          return buttonToolbar;
        }
      },
      props: {
        show: this.editable && this.modalOpen,
        options: {
          placement: this.newValue.popupPlacement || 'right-start'
        }
      },
      directives: [
        {
          name: 'click-outside',
          value: { handler: this.closeModal }
        }
      ]
    });

    return popupModal;
  }
}
</script>
