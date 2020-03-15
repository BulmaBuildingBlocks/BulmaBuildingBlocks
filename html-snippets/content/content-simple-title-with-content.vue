<template>
  <div class="container" :class="color ? `has-background-${color}` : ''">
    <div class="section is-large">
      <h2 class="title is-spaced" :class="color ? `has-text-${color}-invert` : ''">Bulma Building Blocks</h2>
      <div class="content" :class="color ? `has-text-${color}-invert` : ''">
        <p>
          Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
          administrate highly efficient sources via go forward customer service. Appropriately parallel task
          high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize collaborative
          bandwidth via B2C intellectual capital. Professionally grow resource sucking relationships after real-time
          ROI. Collaboratively embrace user friendly manufactured products rather than efficient "outside the.
        </p>
        <p>
          Enthusiastically exploit multimedia based web-readiness whereas scalable quality vectors. Objectively morph
          professional models through focused niches. Authoritatively impact collaborative interfaces before distributed
          leadership. Collaboratively build leading-edge e-services before quality web-readiness. Completely supply
          standardized.
        </p>
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
