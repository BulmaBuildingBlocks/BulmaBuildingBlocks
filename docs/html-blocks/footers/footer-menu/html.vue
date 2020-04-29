<template>
  <footer class="footer " :class="color ? `has-background-${color}` : ''">
    <div :class="container ? 'container' : ''">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <div class="level">
            <nav
              class="navbar"
              role="navigation"
              aria-label="main navigation"
              :class="color ? `is-${color}` : ''"
            >
              <div class="navbar-row">
                <div
                  v-for="(item, index) in content.navLinks"
                  :key="index"
                  class="navbar-item"
                  :class="color ? `has-text-${color}-invert` : ''"
                >
                  <editable-link
                    :value="item"
                    :editable="editable"
                    @value="item = $event"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <editable-content
        tag="div"
        type="text"
        class="content has-text-centered"
        :class="color ? `has-text-${color}-invert` : ''"
        :value="content.copyright"
        :editable="editable"
        @value="content.copyright = $event"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class FooterMenu extends mixins(HtmlBlockMixin) {}
</script>
