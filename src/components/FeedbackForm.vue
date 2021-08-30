<template>
<div class="feedback-form">
    <h2>{{ $t('feedback.title') }}</h2>
    <form @submit.prevent="">
        <div class="input-group"><input type="text" name="feedbackName" id="feedbackName" :placeholder="$t('feedback.input_name')" autocomplete="off">
            <label for="feedbackName">
                <span class="input-group__icon">
                    <svg-icon icon="profile"></svg-icon>
                </span>
            </label>
        </div>
        <div class="input-group"><input type="email" name="feedbackEmail" id="feedbackEmail" :placeholder="$t('feedback.input_email')" autocomplete="off">
            <label for="feedbackEmail">
                <span class="input-group__icon">
                    <svg-icon icon="mail"></svg-icon>
                </span>
            </label>
        </div>
        <div class="input-group"><input type="tel" name="feedbackPhone" id="feedbackPhone" :placeholder="$t('feedback.input_phone')"  autocomplete="off">
            <label for="feedbackPhone">
                <span class="input-group__icon">
                    <svg-icon icon="phone"></svg-icon>
                </span>
            </label>
        </div>
        <button type="submit" class="button">Send</button>
    </form>
</div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
    components: {
        SvgIcon,
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_app.scss';
.feedback-form {
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
            color: rgba(var(--text-primary-color), .8);
            font-size: 16px;
            border: 1px solid transparent;
            transition: $trans;
            @include masm {
                padding: 15px 10px 15px 40px;
            }
            &::placeholder {
                color: rgba(var(--text-primary-color), .5);
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
</style>