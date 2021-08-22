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
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/_app.scss';
    .header {
        margin: 0 0 162px;
        padding: 4px 9px 0;
        position: relative;
        display: flex;
        align-items: center;
        @include malg {
            margin-bottom: 92px;
        }
        @include masm {
            margin-bottom: 80px;
        }
        &::before {
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
            @include malg {
                height: 340px;
            }
            @include masm {
                height: 220px;
            }
        }
        .locale-switcher {
            margin-left: auto;
        }
    }
</style>