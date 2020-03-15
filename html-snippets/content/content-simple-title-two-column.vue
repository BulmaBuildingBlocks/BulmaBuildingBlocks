<template>
  <div class="container" :class="color ? `has-background-${color}` : ''">
    <div class="section is-large">
      <h2 class="title is-1 has-text-centered" :class="color ? `has-text-${color}-invert` : ''">
        Bulma Building Blocks
      </h2>
      <div class="content is-medium">
        <div class="columns">
          <div class="column">
            <p>
              Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
              administrate highly efficient sources via go forward customer service. Appropriately parallel task
              high-quality "outside the box" thinking through bleeding-edge systems.
            </p>
          </div>
          <div class="column">
            <p>
              Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
              administrate highly efficient sources via go forward customer service. Appropriately parallel task
              high-quality "outside the box" thinking through bleeding-edge systems.
            </p>
          </div>
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
