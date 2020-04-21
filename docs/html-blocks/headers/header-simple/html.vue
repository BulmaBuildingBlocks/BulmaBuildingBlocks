<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    :class="color ? `is-${color}` : ''"
  >
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="navbar-brand">
        <editable-image
          class="navbar-item"
          :value.sync="content.logo"
          :editable="editable"
          @value="content.logo = $event"
        />

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <editable-link
            v-for="(item, index) in content.navLinks"
            :key="index"
            class="navbar-item"
            :class="`has-text-${color}-invert`"
            :value="item"
            :editable="editable"
            @value="item = $event"
          />
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <editable-link
                v-for="(item, index) in content.navButtons"
                :key="index"
                class="control"
                :value="item"
                :editable="editable"
                @value="item = $event"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlBlockMixin from '~/mixins/HtmlBlockMixin';

@Component
export default class HeaderSimple extends mixins(HtmlBlockMixin) {}
</script>
