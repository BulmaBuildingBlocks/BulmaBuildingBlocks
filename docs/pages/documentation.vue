<template>
  <div content="html-blocks">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Getting Started
          </h1>
        </div>
      </div>
    </section>
    <section class="section is-large">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column is-3">
              <h3>Use the Builder</h3>
            </div>
            <div class="column">
              <div class="buttons">
                <nuxt-link class="button is-primary" to="/page-builder">
                  Start Building
                </nuxt-link>
              </div>
            </div>
          </div>

          <hr />

          <div class="columns">
            <div class="column is-3">
              <h3>Standalone</h3>
            </div>
            <div class="column">
              <p>
                Using CDN or downloading files to serve local
              </p>
              <ul>
                <li>
                  The css file comes with Bulma and Bulma Building Blocks.
                </li>
              </ul>
              <h4>Installation</h4>
              <div class="content">
                <p>Just download or use these as CDN:</p>
                <pre class="npm"><a
                  href="https://unpkg.com/bulmabuildingblocks/dist/bulmabuildingblocks.min.css"
                  target="_blank"
                >https://unpkg.com/bulmabuildingblocks/dist/bulmabuildingblocks.min.css</a
                ></pre>
              </div>
            </div>
          </div>

          <hr />

          <div class="columns">
            <div class="column is-3">
              <h3>Using npm</h3>
            </div>
            <div class="column">
              <p>
                Install the npm package
              </p>

              <pre class="npm">npm install bulmabuildingblocks</pre>

              <p>
                Look at the below example of how to import using npm
              </p>

              <pre v-highlightjs="importExample"><code class="scss"/></pre>

              <p>
                Look at the below example of how to import into an existing
                Bulma project using npm, you can leave out the variable file if
                you don't want the same configuration as Bulma Building Blocks
              </p>

              <pre
                v-highlightjs="importExistingExample"
              ><code class="scss"/></pre>
            </div>
          </div>

          <hr />

          <div class="columns">
            <div class="column is-3">
              <h3>Use the skeleton</h3>
            </div>
            <div class="column">
              <p>
                Use the template below as a starting point, copy the html
                snippets into the recommended area.
              </p>

              <pre v-highlightjs="template"><code class="html"/></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import packageJson from '@@/package.json';

@Component
export default class Default extends Vue {
  version = packageJson.version;

  importExample = `//Bulma Building Block
@import 'bulmabuildingblocks';`;

  importExistingExample = `//Bulma Building Block variables
@import 'bulmabuildingblocks/src/initial-variables';

// Bulma
@import 'bulma/bulma';

//Bulma Building Block variables
@import 'bulmabuildingblocks/src/main';`;

  template = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bulma Building Block</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/bulmabuildingblocks@${this.version}/dist/bulmabuildingblocks.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
  </head>
  <body>
     <!-- Insert the html blocks here. -->
  </body>
</html>`;
}
</script>
