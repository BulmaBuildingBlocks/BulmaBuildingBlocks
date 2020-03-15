<template>
  <div class="container" :class="color ? `has-background-${color}` : ''">
    <div class="section is-large">
      <div class="columns is-right">
        <div class="column is-9-desktop is-7-widescreen">
          <h2 class="subtitle" :class="color ? `has-text-${color}-invert` : ''">
            Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
            administrate highly efficient sources via go forward customer service. Appropriately parallel task
            high-quality "outside the box" thinking through bleeding-edge systems.
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
