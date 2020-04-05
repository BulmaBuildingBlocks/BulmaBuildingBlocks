<template>
  <nav class="navbar is-light is-spaced is-medium" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-menu">
        <template v-for="(items, i) in data">
          <ul :key="i" class="navbar-start">
            <li v-for="item in normalizedData(items.pages)" :key="item.title">
              <nuxt-link v-if="item.title" class="navbar-item" :to="item.path">
                <span>{{ item.title }}</span>
                <b-tag v-if="item.isNew" type="is-success">New!</b-tag>
                <b-tag v-if="item.isUpdated" type="is-info">Updated</b-tag>
              </nuxt-link>

              <!-- submenu -->
              <template v-else>
                <p>{{ item.category }}</p>
                <ul>
                  <li v-for="subItem in normalizedData(item.pages)" :key="subItem.title">
                    <nuxt-link class="navbar-item" :to="subItem.path">
                      <span>{{ subItem.title }}</span>
                      <b-tag v-if="subItem.isNew" type="is-success">New!</b-tag>
                      <b-tag v-if="subItem.isUpdated" type="is-info">
                        Updated
                      </b-tag>
                    </nuxt-link>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import routes from '~/data/routes.json';

export interface Routes {
  [key: string]: {
    [key: string]: {};
  };
}

@Component
export default class SideBar extends Vue {
  @Prop(Array) data!: [];

  normalizedData(items: string[]): { [p: string]: {} }[] {
    const Routes: Routes = routes;
    return items.map((item) => {
      return Routes[item];
    });
  }

  backToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>
