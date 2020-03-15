<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="level is-fullwidth">
      <div class="level-item has-text-centered">
        <a href="#">
          <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  @Prop(String) color!: string;
}
</script>
