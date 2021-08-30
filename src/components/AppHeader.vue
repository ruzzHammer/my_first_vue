<template>
    <header class="header">
        <theme-switcher></theme-switcher>
        <locale-switcher></locale-switcher>
    </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
import LocaleSwitcher from './LocaleSwitcher.vue';
export default {
    name: 'AppHeader',
    components: {
      ThemeSwitcher,
      LocaleSwitcher
    },
    methods: {
        isHome() {
            return this.$route.name === 'Home'
        }
    },
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
    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 470px;
        -webkit-mask-image: url(../assets/mask.png);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-image: url(../assets/mask.png);
        mask-repeat: no-repeat;
        mask-size: 100% 100%;
        background: linear-gradient(357deg, rgba(var(--theme-primary-color), 0.22) 6%, rgba(var(--bgc-primary),1) 62%);
        z-index: -1;
        transition: .8s ease-in-out;
        @include malg {
            height: 340px;
        }
        @include masm {
            height: 220px;
        }
        @include maxs {
            height: 180px;
            background: linear-gradient(357deg, rgba(var(--theme-primary-color), 0.22) 6%, rgba(var(--bgc-primary),1) 62%);
        }
    }
    &::after {
        left: 100%;
        transform: scaleX(-1);
    }
    .locale-switcher {
        margin-left: auto;
    }
}
.non-home .header {
    &::before {
        transform: translateX(-100%);
        opacity: 0;
    }
    &::after {
        transform: translateX(-100%) scaleX(-1);
        opacity: 0;
    }
}
</style>