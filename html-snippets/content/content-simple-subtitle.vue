<template>
  <div class="container has-text-centered" :class="color ? `has-background-${color}` : ''">
    <div class="section is-large">
      <div class="columns is-centered">
        <div class="column is-9-desktop is-6-widescreen">
          <h2 class="subtitle" :class="color ? `has-text-${color}-invert` : ''">
            Continually initiate fully tested human capital before an expanded array of action items. Proactively
            benchmark next-generation information.
          </h2>
        </div>
      </div>
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
