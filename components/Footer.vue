<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              Authored by
              <a href="https://twitter.com/JosephLeeAnson" target="_blank">Joseph Anson</a>
            </p>
            <p>
              <small>
                Bulma Building Blocks source code is licensed under
                <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>.
              </small>
            </p>

            <b-field>
              <p class="control">
                <a class="button" href="https://github.com/JosephAnson/BulmaDesignBlocks" target="_blank">
                  <b-icon icon="github-circle" />
                  <span>GitHub</span>
                </a>
              </p>
              <!--<p class="control">
                <a class="button is-patreon" href="https://www.patreon.com/" target="_blank">
                  <b-icon icon="patreon" />
                  <span>Patreon</span>
                </a>
              </p>-->
            </b-field>
          </div>

          <div class="column">
            <nuxt-link to="/" exact class="navbar-item has-text-weight-semibold">
              Home
            </nuxt-link>

            <nuxt-link to="/documentation" class="navbar-item has-text-weight-semibold">
              Documentation
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
