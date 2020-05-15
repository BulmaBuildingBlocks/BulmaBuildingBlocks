<script lang="ts">
import { CreateElement } from 'vue';
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import ButtonToolbar from './LinkToolbar.vue';
import PopupModal from '~/components/PopupModal.vue';

import { EditableLinkProps, LinkType } from '~/components/editor/link/types';
import ClickOutside from '~/directives/click-outside';

/***
 * Editting Features:
 * Upload and replace link
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

  get linkClasses() {
    const linkType = this.newValue.linkType.toLowerCase();
    let linkStyle = '';

    if (this.newValue.status) {
      if (this.newValue.linkType === LinkType.Link) {
        linkStyle = `has-text-${this.newValue.status.toLowerCase()}`;
      } else {
        linkStyle = `is-${this.newValue.status?.toLowerCase()}`;
      }
    }

    return [linkType, linkStyle];
  }

  toggleModal(event: Event) {
    event.preventDefault();

    this.modalOpen = !this.modalOpen;
  }

  closeModal() {
    this.modalOpen = false;
  }

  render(createElement: CreateElement) {
    const link = createElement(
      'a',
      {
        class: this.linkClasses,
        on: {
          click: this.toggleModal
        },
        attrs: {
          href: this.newValue.href
        }
      },
      this.newValue.label
    );

    const linkToolbar = createElement(ButtonToolbar, {
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

    return createElement(PopupModal, {
      scopedSlots: {
        reference: () => {
          return link;
        },
        default: () => {
          return linkToolbar;
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
  }
}
</script>
