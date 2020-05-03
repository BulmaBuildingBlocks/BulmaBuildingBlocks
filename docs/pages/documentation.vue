<template>
  <div content="html-blocks">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Getting Started
          </h1>
          <h2 class="subtitle">
            How to use Bulma Building Blocks
          </h2>
        </div>
      </div>
    </section>
    <section class="section is-large">
      <div class="container">
        <div class="content">
          <p class="title">Standalone</p>
          <p class="subtitle is-spaced">
            Using CDN or downloading files to serve local
          </p>
          <p class="title is-4">Installation</p>
          <div class="content">
            <p>Just download or use these as CDN:</p>
            <ul>
              <li>
                Style:
                <a
                  href="https://unpkg.com/JosephAnson/BulmaBuildingBlocks/blob/master/docs/static/bulmabuildingblocks.min.css"
                  target="_blank"
                >
                  https://unpkg.com/JosephAnson/BulmaBuildingBlocks/blob/master/docs/static/bulmabuildingblocks.min.css
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Default extends Vue {}
</script>
