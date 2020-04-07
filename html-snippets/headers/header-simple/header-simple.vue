<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" :class="color ? `is-${color}` : ''">
    <div :class="container ? 'container' : 'navbar-row'">
      <div class="navbar-brand">
        <editable-content
          tag="div"
          type="image"
          class="navbar-item"
          :value="content.logo"
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
          <editable-content
            v-for="(item, index) in content.navLinks"
            :key="index"
            tag="div"
            type="text"
            class="navbar-item"
            :class="`has-text-${color}-invert`"
            :value="item.content"
            :editable="editable"
            @value="item.content = $event"
          />
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <editable-content
                v-for="(item, index) in content.navButtons"
                :key="index"
                tag="div"
                type="text"
                class="control"
                :value="item.content"
                :editable="editable"
                @value="item.content = $event"
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
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class HeaderExSimple extends mixins(HtmlSnippetMixin) {}
</script>
