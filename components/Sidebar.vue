<template>
  <nav class="navbar is-light is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-menu">
        <template v-for="(items, i) in data">
          <p :key="items.category" class="navbar-item">
            {{ items.category }}
          </p>
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

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import routes from '@/data/routes';

@Component
export default class SideBar extends Vue {
  @Prop(Array) data;

  normalizedData(items) {
    return items.map((item) => {
      return typeof item === 'string' ? routes[item] : item;
    });
  }

  backToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>
