<template>
    <div class="socials">
        <a v-for="social in socials" :key="social.id" :href="social.link">
            <svg-icon :icon="social.icon"></svg-icon>
        </a>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
    name: 'AppSocials',
    props: {
        socials: Array
    },
    components: {
        SvgIcon
    }
}
</script>

<style lang="scss" scoped>
.socials {
    transition: .3s ease-in-out;
}
.transition-leave-to,
.transition-enter {
    .socials {
        opacity: 0;
    }
}
</style>