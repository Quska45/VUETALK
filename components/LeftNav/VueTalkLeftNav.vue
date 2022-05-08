<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        :delay="expandWithDelay ? 500 : null"
        type="is-light"
        open
        :fullheight=true
      >
        <div class="p-1">
          <div class="block">
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </div>
          <b-menu class="is-custom-mobile">
            <b-menu-list label="Menu">
              <b-menu-item icon="information-outline">
                <nuxt-link to="/">123</nuxt-link>
                <nuxt-link to="/test">345</nuxt-link>
              </b-menu-item>
              <b-menu-item active expanded icon="cog-outline">
              </b-menu-item>
              <b-menu-item icon="account">

              </b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>
<script>
export default {
    name: 'VueTalkLeftNav',
    data() {
      return {
        expandOnHover: false,
        expandWithDelay: false,
        mobile: "reduce",
        reduce: true
      };
    }
}
</script>
<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: 100%;
// min-height: 100vh;
.sidebar-layout {
  display: flex;
  flex-direction: row;
  min-height: 100%;
// min-height: 100vh;
}
}
@media screen and (max-width: 1023px) {
  .p-1 {
    padding: 1em;
  }
  .sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
      display: flex;
      flex-direction: row;
      min-height: 100%;
      // min-height: 100vh;
    }
  }
  @media screen and (max-width: 1023px) {
    .b-sidebar {
      .sidebar-content {
        &.is-mini-mobile {
          &:not(.is-mini-expand),
          &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
            .menu-list {
              li {
                a {
                  span:nth-child(2) {
                    display: none;
                  }
                }
                ul {
                  padding-left: 0;
                  li {
                    a {
                      display: inline-block;
                    }
                  }
                }
              }
            }
            .menu-label:not(:last-child) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .b-sidebar {
      .sidebar-content {
        &.is-mini {
          &:not(.is-mini-expand),
          &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
            .menu-list {
              li {
                a {
                  span:nth-child(2) {
                    display: none;
                  }
                }
                ul {
                  padding-left: 0;
                  li {
                    a {
                      display: inline-block;
                    }
                  }
                }
              }
            }
            .menu-label:not(:last-child) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .is-mini-expand {
    .menu-list a {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
