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
    top: -10%;
    right: 0;
    width: 65%;
    min-width: 947px;
    height: 110%;
    min-height: 2315px;
    -webkit-mask-image: url(assets/mask-vertical.png);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-image: url(assets/mask-vertical.png);
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    background: linear-gradient(to bottom, rgba(var(--theme-primary-color), .85) 80%, rgba(var(--bgc-primary),1) 100%);
    z-index: -1;
    opacity: 0;
    right: -100%;
    transition: .8s ease-in-out;
  }
  &.non-home {
    &::before {
      right: 0;
      opacity: 1;
    }
  }
}
</style>
