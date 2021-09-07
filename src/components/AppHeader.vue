<template>
    <header class="header">
        <theme-switcher></theme-switcher>
        <locale-switcher></locale-switcher>
    </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
import LocaleSwitcher from './LocaleSwitcher.vue';
import isHome from '../mixins/isHome.js';
export default {
    name: 'AppHeader',
    components: {
      ThemeSwitcher,
      LocaleSwitcher
    },
    mixins: [isHome]
}
</script>

<style lang="scss" scoped>
@import '@/scss/_app.scss';
.header {
    margin: 0 0 24px;
    padding: 4px 9px 0;
    position: relative;
    display: flex;
    align-items: center;
    transition: .3s ease-in-out;
    .locale-switcher {
        margin-left: auto;
    }
}
</style>