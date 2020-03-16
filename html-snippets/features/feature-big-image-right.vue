<template>
  <div class="section is-large" :class="color ? `has-background-${color}` : ''">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="title is-spaced" :class="color ? `has-text-${color}-invert` : ''">Bulma Building Blocks</h2>
          <div class="content" :class="color ? `has-text-${color}-invert` : ''">
            <p>
              Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
              administrate highly efficient sources via go forward customer service. Appropriately parallel task
              high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
              collaborative bandwidth via B2C intellectual capital.
            </p>
            <p>
              Enthusiastically exploit multimedia based web-readiness whereas scalable quality vectors. Objectively
              morph professional models through focused niches. Authoritatively impact collaborative interfaces before
              distributed leadership.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="image is-3by2 is-contained">
            <img src="~/assets/images/Scene Plants.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HtmlSnippetMixin from '~/mixins/HtmlSnippetMixin';

@Component
export default class Index extends mixins(HtmlSnippetMixin) {}
</script>
