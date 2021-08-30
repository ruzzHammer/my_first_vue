<template>
<div 
:class="{'non-home': !isHome()}"
class="content-wrap">
  <app-header></app-header>
  <router-view v-slot="{ Component }">
    <transition name="transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
      isHome() {
          return this.$route.name === 'Home'
      }
  },
}
</script>

<style lang="scss">
@import '@/scss/_app.scss';

.transition-enter-active,
.transition-leave-active {
  transition: .3s;
}

.content-wrap {
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -80px;
    right: -100%;
    max-width: 1302px;
    min-width: 1302px;
    height: calc(100% + 80px);
    min-height: 2315px;
    mask-image: url(assets/mask-vertical.svg);
    mask-repeat: no-repeat;
    mask-size: 100%;
    background: linear-gradient(to bottom, rgba(var(--theme-primary-color), .85) 80%, rgba(var(--bgc-primary),1) 100%);
    z-index: -10;
    opacity: 0;
    right: -100%;
    transition: .8s ease-in-out;
  }
  &.non-home {
    &::before {
      right: -100px;
      opacity: 1;
      @media (max-width: 1200px) {
        opacity: .6;
      }
    }
  }
}
.dark-theme {
  .content-wrap {
    &.non-home {
      &::before {
        @media (max-width: 1200px) {
          opacity: .3;
        }
      }
    }
  }
}
</style>
