<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        :mobile="mobile"
        :reduce="reduce"
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

          <vue-talk-left-nav-item v-for="menu in menus" :key="menu.url" :url="menu.url" :is-active="menu.isActive" :icon="menu.icon" @select-nav-item="selectNavItem">
          </vue-talk-left-nav-item>

        </div>
      </b-sidebar>
    </section>
  </div>
</template>
<script>
//import VueTalkLeftNavItem from "./VueTalkLeftNavItem";
import VueTalkLeftNavItem from "@/components/LeftNav/VueTalkLeftNavItem";
import { vueTalkLeftNavPropsMethods } from "@/components/LeftNav/js/VueTaklLeftNav/PropsMethods";

export default {
    name: 'VueTalkLeftNav',
    data() {
      return {
        expandOnHover: false,
        expandWithDelay: false,
        mobile: "reduce",
        reduce: true,
        menus: [
          { url: 'users', isActive: 'is-active', icon: 'account' },
          { url: 'chattings', isActive: '', icon: 'chat' },
          { url: 'settings', isActive: '', icon: 'cog-outline' }
        ]
      };
    },
    components: {
      VueTalkLeftNavItem
    },
    methods: {
      selectNavItem: function( url ){
        vueTalkLeftNavPropsMethods.selectNavItem( this, url );
      },
      initMenus: function( menus ){
        let url = window.location.href.split( "http://localhost:3000/" )[1].split( '/' )[0];

        menus.forEach(function( menu ){
          if( menu.url === url ){
            menu.isActive = 'is-active';
          } else {
            menu.isActive = '';
          }
        });
      }
    },
    mounted() {
      this.initMenus( this.menus );
    }
}
</script>
<style lang="scss">
a {
  color: #4a4a4a;
}
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
