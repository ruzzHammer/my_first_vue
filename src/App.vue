<template>
  <app-header></app-header>
  <router-view v-slot="{ Component }">
    <transition name="transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/scss/_app.scss';

.transition-enter-active,
.transition-leave-active {
  transition: .5s;
}
</style>
