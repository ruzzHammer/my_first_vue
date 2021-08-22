<template>
    <div class="info">
        <div class="info-header">
            <div class="info-header__img" v-if="avatar">
                <img :src="require(`@/assets/${avatar}`)" alt="">
            </div>
            
            <h1 class="info-header__title" v-if="name">{{ name }}</h1>
            <p class="info-header__subtitle" v-if="catchPhrase">{{ catchPhrase }}</p>
        </div>
        
        <div class="info-links">
            <a href="#" class="links-item links-item--blue">
                <span class="links-item__icon">
                    <svg-icon icon="code"></svg-icon>
                </span>
                <span class="links-item__title">{{ $t('infoCard.links.services') }}</span>
            </a>
            <a href="#" class="links-item links-item--themed">
                <span class="links-item__icon">
                    <svg-icon icon="calc"></svg-icon>
                </span>
                <span class="links-item__title">{{ $t('infoCard.links.calc') }}</span>
            </a>
            <a href="#" class="links-item links-item--yellow">
                <span class="links-item__icon">
                    <svg-icon icon="star"></svg-icon>
                </span>
                <span class="links-item__title">{{ $t('infoCard.links.cases') }}</span>
            </a>
        </div>

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

            <div class="info-form">
                <h2>{{ $t('infoCard.feedback.title') }}</h2>
                <form>
                    <div class="input-group"><input type="text" name="feedbackName" id="feedbackName" :placeholder="$t('infoCard.feedback.input_name')" autocomplete="off">
                        <label for="feedbackName">
                            <span class="input-group__icon">
                                <svg-icon icon="profile"></svg-icon>
                            </span>
                        </label>
                    </div>
                    <div class="input-group"><input type="email" name="feedbackEmail" id="feedbackEmail" :placeholder="$t('infoCard.feedback.input_email')" autocomplete="off">
                        <label for="feedbackEmail">
                            <span class="input-group__icon">
                                <svg-icon icon="mail"></svg-icon>
                            </span>
                        </label>
                    </div>
                    <div class="input-group"><input type="tel" name="feedbackPhone" id="feedbackPhone" :placeholder="$t('infoCard.feedback.input_phone')"  autocomplete="off">
                        <label for="feedbackPhone">
                            <span class="input-group__icon">
                                <svg-icon icon="phone"></svg-icon>
                            </span>
                        </label>
                    </div>
                    <button type="submit" class="button">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

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
        SvgIcon
    },

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
        margin-bottom: 100px;
        @include malg {
            margin-bottom: 50px;
        }
        @include masm {
            margin-bottom: 24px;
        }
        &__img {
            display: block;
            width: 333px;
            height: 333px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 23px;
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
            @include malg {
                margin-bottom: 10px;
            }
        }
        &__subtitle {
            @extend .h2;
            max-width: 646px;
            margin: 0;
            text-align: center;
            @include malg {
                max-width: 500px;
                padding: 0 15px;
            }
        }
    }
    &-links {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
        width: 100%;
        max-width: $containerSize;
        padding: 0 15px;
        margin-bottom: 120px;
        @include malg {
            margin-bottom: 80px;
        }
        @include masm {
            margin-bottom: 40px;
            gap: 10px;
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
    &-form {
        display: flex;
        flex-direction: column;
        max-width: 340px;
        @include malg {
            align-items: center;
            margin: 0 auto;
        }
        form {
            @extend .round-bordered;
            padding-top: 33px;
            flex: 1;
            margin: 0 auto;
        }
        .input-group {
            position: relative;
            margin-bottom: 20px;
            @include maxs {
                margin-bottom: 15px;
            }
            &:last-of-type {
                margin-bottom: 27px;
                @include maxs {
                    margin-bottom: 22px;
                }
            }
            input {
                position: relative;
                background: rgba(var(--bgc-secondary), 0.9);
                border-radius: 10px;
                padding: 18px 20px 18px 60px;
                color: rgba(var(--text-primary-color, .8));
                font-size: 16px;
                border: 1px solid transparent;
                transition: $trans;
                @include masm {
                    padding: 15px 10px 15px 40px;
                }
                &::placeholder {
                    color: rgba(var(--text-primary-color, .5));
                }
                &:hover {
                    box-shadow: inset 0px 0px 4px rgba(var(--bs-primary), 0.1);
                }
                &:focus {
                    outline: none;
                    box-shadow: inset 0px 0px 4px rgba(var(--bs-primary), 0.1);
                    border: 1px solid rgba(var(--theme-primary-color), 0.3);
                }
            }
            label {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                padding: 12px;
                pointer-events: none;
                @include maxs {
                    padding: 10px;
                }
            }
            &__icon {
                width: 36px;
                height: 36px;
                background: rgba(var(--theme-primary-color), .1);
                border-radius: 10px;   
                display: grid;
                place-items: center;
                @include maxs {
                    width: 24px;
                    height: 24px;
                    border-radius: 6px;
                }
                .icon {
                    width: 50%;
                    height: 50%;
                }
            }
        }
        .button {
            width: 100%;
        }
    }
}

// might separate it to outer template
.links {
    &-item {
        background: rgb(var(--bgc-secondary));
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

</style>