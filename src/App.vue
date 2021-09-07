<template>
<div 
:class="{'non-home': !isHome}"
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
import generateBackground from './utils/generateBackground.js';
import isHome from './mixins/isHome.js';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    generateBackground();
  },
  mixins: [isHome]
}
</script>

<style lang="scss">
@import '@/scss/_app.scss';

.transition-enter-active,
.transition-leave-active {
  transition: .3s;
}

</style>
