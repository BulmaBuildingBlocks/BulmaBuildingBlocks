<template>
  <footer class="footer " :class="color ? `has-background-${color}` : ''">
    <div :class="container ? 'container' : ''">
      <div class="level">
        <div class="level-left">
          <editable-image
            class="level-item"
            width="200"
            :value.sync="content.logo"
            :editable="editable"
            @value="content.logo = $event"
          />

          <editable-link
            v-for="(item, index) in content.navLinks"
            :key="index"
            class="level-item"
            :class="`has-text-${color}-invert`"
            :value="item"
            :editable="editable"
            @value="item = $event"
          />
        </div>

        <div class="level-right">
          <div class="level-item">
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
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class FooterSimpleMenu extends mixins(HtmlBlockMixin) {}
</script>
