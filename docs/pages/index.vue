<template>
  <div class="page-homepage">
    <section class="page-homepage__hero hero is-primary is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="image is-128x128 block">
            <img
              src="~static/icon-white.png"
              alt="Bulma Building Blocks Logo"
            />
          </div>
          <h1 class="title has-text-white">
            Bulma Building Blocks
          </h1>
          <h2 class="subtitle has-text-white">
            Free Html Building Blocks using the Bulma css framework
          </h2>
          <div class="buttons is-centered">
            <nuxt-link
              class="button is-medium is-white is-outlined is-fullwidth-mobile"
              to="/html-blocks/headers"
            >
              Html Blocks
            </nuxt-link>
            <nuxt-link
              class="button is-medium is-white is-fullwidth-mobile"
              to="/page-builder"
            >
              Page Builder
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <div class="section is-large">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title is-spaced has-text-white-invert">
              Getting started
            </h3>
          </div>
          <div class="column">
            <p class="subtitle has-text-white-invert">
              View the documentation to get started using Bulma Building Blocks
            </p>
            <div class="buttons">
              <nuxt-link
                class="button is-medium is-primary"
                to="/documentation"
              >
                Documentation
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section is-large has-background-white-bis">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h3 class="title has-text-white-invert">
              HTML Snippets
            </h3>
            <div class="content has-text-white-invert">
              <p>
                Bulma Building Blocks is a selection html snippets that can be
                copied into your existing Bulma projects with minor changes to
                the current Bulma implementation.
              </p>
            </div>
            <div class="buttons">
              <nuxt-link
                class="button is-medium is-primary"
                to="/html-blocks/headers"
              >
                Start Copying
              </nuxt-link>
            </div>
          </div>
          <div class="column">
            <span class="image is-3by2 is-contained">
              <!---->
              <img
                src="~assets/images/Scene Wireframe Background.svg"
                alt="HTML Snippets shown on multiple devices"
                draggable="false"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section is-large">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <span class="image is-3by2 is-contained">
              <!---->
              <img
                src="~assets/images/Scene Whiteboard.svg"
                alt="Team creating ideas for a new website"
                draggable="false"
              />
            </span>
          </div>
          <div class="column">
            <h3 class="title has-text-white-invert">
              Page Builder
            </h3>
            <div class="content has-text-white-invert">
              <p>
                Bulma Building Blocks provides an easy to use page builder that
                can be downloaded as a static website. You can live edit the
                design changing text, images, button styles and more. Providing
                an easy page building website to create stylish and responsive
                websites.
              </p>
            </div>
            <div class="buttons">
              <nuxt-link class="button is-medium is-primary" to="/page-builder">
                Start Building
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HomePage extends Vue {}
</script>
