<template>
  <div class="container">
    <div v-if="filteredSnippets" class="section">
      <div v-for="(snippet, name) in filteredSnippets" :key="name">
        <Example :code="snippet" :title="name"></Example>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import _ from 'lodash';
import htmlSnippets from '~/shared/html-snippets'; // Load all files in folder into array
import Example from '~/components/Example.vue';

@Component({
  components: {
    Example
  }
})
export default class DesignBlocks extends Vue {
  snippets = htmlSnippets;

  get filteredSnippets() {
    const filteredKeys = Object.keys(this.snippets)
      .filter((key: string) => {
        return key.toLowerCase().includes(this.$route.params.templates);
      })
      .sort();

    return _.pick(this.snippets, filteredKeys);
  }
}
</script>
