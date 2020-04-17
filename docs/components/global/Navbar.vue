<template>
  <nav class="navbar-main is-spaced navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          to="/"
          class="navbar-item"
          title="Buefy: lightweight UI components for Vue.js based on Bulma"
          active-class=""
        >
          <div class="image is-32x32 is-contained">
            <img src="~static/icon.png" />
          </div>
        </nuxt-link>

        <a
          class="navbar-item"
          href="https://github.com/JosephAnson/BulmaDesignBlocks"
          target="_blank"
          title="Github"
        >
          <b-icon icon="github-circle" />
        </a>

        <span
          class="navbar-burger burger"
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive"
        >
          <span />
          <span />
          <span />
        </span>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <nuxt-link to="/" exact class="navbar-item">
            Home
          </nuxt-link>

          <nuxt-link to="/html-blocks/headers" exact class="navbar-item">
            Html Blocks
          </nuxt-link>

          <nuxt-link to="/page-builder" exact class="navbar-item">
            Page Builder
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">Info</div>

            <div class="navbar-dropdown">
              <strong class="navbar-item is-version">
                <div class="tags has-addons">
                  <span class="tag">Version</span>
                  <span class="tag is-primary">{{ version }}</span>
                </div>
              </strong>
              <strong class="navbar-item is-version">
                <div class="tags has-addons is-fullwidth">
                  <span class="tag">Bulma</span>
                  <span class="tag is-primary">{{ bulmaVersion }}</span>
                </div>
              </strong>

              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://github.com/JosephAnson/BulmaBuildingBlocks/blob/master/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Changelogs
              </a>
            </div>
          </div>

          <div class="navbar-item">
            <a class="button is-outlined" @click="tweet">
              <b-icon pack="fab" icon="twitter" />
              <span>Tweet</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import bulmaPackage from 'bulma/package.json';
import { Component, Vue } from 'vue-property-decorator';
import packageJson from '@@/package.json';

@Component
export default class Navbar extends Vue {
  isMenuActive = false;
  // bulmaVersion = '0.8.0';
  version = packageJson.version;
  bulmaVersion = bulmaPackage.version || '0.8.0';

  tweet(): void {
    const width = 575;
    const height = 400;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const url = `https://twitter.com/share?url=${encodeURIComponent(
      document.location.protocol + '//' + document.location.host
    )}&text=Bulma Building Blocks: html building blocks based on Bulma&hashtags=bulmabuildingblock&via=JosephLeeAnson, @JosephLeeAnson`;
    const opts = `status=1,width=${width},height=${height},top=${top},left=${left}`;

    window.open(url, '', opts);
  }
}
</script>
