<template>
    <div 
    :class="{
        'non-home': !isHome()    
    }"
    class="info">
        <div class="info-header">
            <div class="info-header__img" v-if="avatar">
                <img :src="require(`@/assets/${avatar}`)" alt="">
            </div>
            
            <h1 class="info-header__title" v-if="name">{{ name }}</h1>
            <p class="info-header__subtitle" v-if="catchPhrase">{{ catchPhrase }}</p>
        </div>
        
        <navigation-links></navigation-links>

        <div class="info-body">
            <div class="info-personal">
                <h2>{{ $t('infoCard.personalInfo.title') }}</h2>
                <table>
                    <tr class="personal-item" v-if="name">
                        <td class="personal-item__name">{{ $t('infoCard.personalInfo.name') }}: </td>
                        <td class="personal-item__value">{{ $t('infoCard.name') }}</td>
                    </tr>
                    <tr class="personal-item" v-if="location">
                        <td class="personal-item__name">{{ $t('infoCard.personalInfo.location') }}: </td>
                        <td class="personal-item__value">{{ $t('infoCard.location') }}</td>
                    </tr>
                    <tr class="personal-item" v-if="socials">
                        <td class="personal-item__name">{{ $t('infoCard.personalInfo.socials') }}: </td>
                        <td class="personal-item__value">
                            <div class="socials">
                                <a v-for="social in socials" :key="social.id" :href="social.link">
                                    <svg-icon :icon="social.icon"></svg-icon>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="personal-item" v-if="phoneNumber">
                        <td class="personal-item__name">{{ $t('infoCard.personalInfo.phone') }}: </td>
                        <td class="personal-item__value"><a :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a></td>
                    </tr>
                    <tr class="personal-item" v-if="email">
                        <td class="personal-item__name">{{ $t('infoCard.personalInfo.email') }}:</td>
                        <td class="personal-item__value"><a :href="`mailto:${email}`">{{ email }}</a></td>
                    </tr>
                </table>
            </div>
            <feedback-form></feedback-form>
        </div>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import FeedbackForm from './FeedbackForm.vue';
import NavigationLinks from './NavigationLinks.vue';

export default {
    name: 'InfoCard',
    props: {
        name: String,
        avatar: String,
        catchPhrase: String,
        location: String,
        socials: Array,
        phoneNumber: String,
        email: String,
    },
    components: {
        SvgIcon,
        FeedbackForm,
        NavigationLinks
    },
    methods: {
        isHome() {
            return this.$route.name === 'Home'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_app.scss';
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 138px;
        margin-bottom: 100px;
        transition: .3s ease-in-out;
        @include malg {
            margin-top: 68px;
            margin-bottom: 50px;
        }
        @include masm {
            margin-top: 50px;
            margin-bottom: 24px;
        }
        @include maxs {
            margin-top: 20px;
        }
        &__img {
            display: block;
            width: 333px;
            height: 333px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 23px;
            transition: .3s ease-in-out;
            @include malg {
                width: 260px;
                height: 260px;
            }
            @include masm {
                width: 135px;
                height: 135px;
            }
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__title {
            margin: 0; 
            transition: .3s ease-in-out;
            @include malg {
                margin-bottom: 10px;
            }
        }
        &__subtitle {
            @extend .h2;
            max-width: 646px;
            margin: 0;
            text-align: center;
            transition: .5s ease-in-out;
            @include malg {
                max-width: 500px;
                padding: 0 15px;
            }
        }
    }

    &-body {
        display: flex;
        gap: 28px;
        width: 100%;
        max-width: $containerSize;
        padding: 0 15px;
        @include malg {
            flex-direction: column;
        }
        h2 {
            margin-bottom: 44px;
            text-align: left;
            @include mamd {
                text-align: center;
            }
        }
    }
    &-personal {
        flex: 1;
        table {
            width: 100%;
            @extend .round-bordered;
            text-align: left;
            td {
                padding-bottom: 40px;
                vertical-align: top;
                @extend .h4;
                @include masm {
                    font-size: 12px;
                    padding-bottom: 13px;
                }
                &:last-of-type {
                    padding-bottom: 15px;
                    text-align: right;
                }

                a {
                    text-decoration: none;
                    color: rgb(var(--text-primary-color));
                    transition: $trans;
                    &:hover {
                        color: rgb(var(--theme-primary-color));
                    }
                }
            }
        }
        .personal-item {
            &__name {
                color: rgba(var(--text-primary-color), .5);
            }
        }
    }
    .socials {
        display: flex;
        align-items: center;
        gap: 14px;
        justify-content: flex-end;
        a {
            &:hover {
                svg {
                    fill: rgb(var(--theme-primary-color));
                    path {
                        fill: rgb(var(--theme-primary-color));
                    }
                }
            }
        }
        svg {
            width: 25px;
            height: 25px;
            transition: $trans;
            path {
                transition: $trans;
            }
        }
    }
}
.transition-leave-to,
.transition-enter-from,
.non-home {
    .info-header {
        margin-top: 0;
        margin-bottom: 7px;
        &__img {
            width: 80px;
            height: 80px;
            margin-bottom: 4px;
        }
        &__title {
            font-size: 24px;
            line-height: 30px;
        }
        &__subtitle {
            display: none;
        }
    }
}

</style>