<template>
    <div class="navigation-links">
        <router-link v-if="!isHome" class="links-item links-item--home" to="/">
            <span class="links-item__title">{{ $t('titles.home') }}</span>
        </router-link>
        <router-link @click="scrollToTop" class="links-item links-item--blue" to="/Services" active-class="links-item--active">
            <span class="links-item__icon">
                <svg-icon icon="code"></svg-icon>
            </span>
            <span class="links-item__title">{{ $t('titles.services') }}</span>
        </router-link>
        <router-link @click="scrollToTop" class="links-item links-item--themed" to="/Calc" active-class="links-item--active">
            <span class="links-item__icon">
                <svg-icon icon="calc"></svg-icon>
            </span>
            <span v-if="isHome" class="links-item__title">{{ $t('titles.calc') }}</span>
            <span v-else class="links-item__title">{{ $t('titles.calcAlt') }}</span>
        </router-link>
        <router-link @click="scrollToTop" class="links-item links-item--yellow" to="/Cases" active-class="links-item--active">
            <span class="links-item__icon">
                <svg-icon icon="star"></svg-icon>
            </span>
            <span class="links-item__title">{{ $t('titles.cases') }}</span>
        </router-link>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
    components: {
        SvgIcon,
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
            });
        }
    },
    computed: {
        isHome() {
            return this.$route.name === 'Home'
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_app.scss';
.navigation-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    width: 100%;
    max-width: $containerSize;
    padding: 0 15px;
    margin: 100px 0 120px;
    transition: .5s ease-in-out;
    @include malg {
        margin-bottom: 80px;
    }
    @include masm {
        margin-bottom: 40px;
        gap: 10px;
    }
}

.non-home {
    .navigation-links {
        grid-template-columns: 70px 120px;
        gap: 8px 12px;
        margin: 7px 0 0;
    }
    .links {
        &-item {
            justify-content: center;
            align-items: flex-start;
            padding: 7px 10px;
            &:hover {
                transform: none;
            }
            &--home {
                grid-row: 1 / 4;
                align-items: center;
                background: rgb(var(--theme-primary-color));
                .links-item__title {
                    color: #fff;
                    opacity: 1;
                }
            }
            &--active {
                background: rgb(var(--theme-primary-color));
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: -13px;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 6.5px 0 6.5px 6px;
                    border-color: transparent transparent transparent rgb(var(--theme-primary-color));
                }
                .links-item__title {
                    color: #fff;
                    opacity: 1;
                }
            }
            &__icon {
                display: none;
            }
            &__title {
                font-size: 14px;
                line-height: 18px;
                text-align: left;
            }
        }
    }
}

.links {
    &-item {
        position: relative;
        background: rgba( 255, 255, 255, 0.45 );
        backdrop-filter: blur( 4px );
        box-shadow: -2px 8px 46px rgba(37, 45, 50, 0.05);
        border-radius: 10px;
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 40px;
        text-decoration: none;
        transition: $trans;
        @include mamd {
            padding: 20px;
        }
        @include masm {
            padding: 7px;
        }
        &:hover {
            border-color: rgba(var(--theme-primary-color), 0.3);
            box-shadow: 0px 0px 8px rgba(var(--theme-primary-color), 0.25);
            transform: translateY(-10px);
        }
        &--blue {
            .links-item__icon {
                background: rgba(14, 162, 246, 0.07);
            }
        }
        &--themed {
            .links-item__icon {
                background: rgba(var(--theme-primary-color), 0.07);
            }
        }
        &--yellow {
            .links-item__icon {
                background: rgba(255, 193, 7, 0.07);
            }
        }
        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &__icon {
            display: grid;
            place-items: center;
            width: 138px;
            height: 138px;
            border-radius: 50%;
            margin-bottom: 19px;
            @include malg {
                width: 80px;
                height: 80px;
            }
            @include masm {
                width: 45px;
                height: 45px;
            }
            .icon {
                width: 60px;
                height: auto;
                @include malg {
                    width: 40%;
                }
                @include masm {
                    width: 23px;
                }
            }
            
        }
        &__title {
            @extend .h2;
            margin: 0;
            opacity: .7;
            color: rgb(var(--text-primary-color));
            font-weight: 500;
            text-align: center;
            @include malg {
                font-size: 20px;
            }
            @include masm {
                font-size: 16px;
            }
        }
    }
}

.transition-leave-to,
.transition-enter,
.transition-leave-active,
.transition-enter-active {
    .navigation-links {
        opacity: 0;
    }
}

</style>