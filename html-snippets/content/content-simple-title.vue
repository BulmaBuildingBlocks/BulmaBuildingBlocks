<template>
  <div class="container has-text-centered" :class="color ? `has-background-${color}` : ''">
    <div class="section is-large">
      <h2 class="title is-1" :class="color ? `has-text-${color}-invert` : ''">Bulma Building Blocks</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  @Prop(String) color!: string;
}
</script>
