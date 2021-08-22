<template>
    <footer class="footer">
        <a href="#" class="footer-item" v-html="$t('footer.privacy')"></a>
        <p class="footer-item" v-html="$t('footer.made', ['/'])"></p>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '@/scss/_app.scss';
    .footer {
        margin: 100px auto 117px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: $containerSize;
        padding: 0 15px;
        @include malg {
            margin: 60px auto;
        }
        &-item {
            color: rgba(var(--text-primary-color), .5);
            text-decoration: none;
            @extend .h6;
            margin-bottom: 0;
            transition: $trans;
            &:hover {
                color: rgba(var(--theme-primary-color), .5);
            }
        }
    }
</style>
// these attributes are added from translation files
<style lang="scss">
    @import '@/scss/_app.scss';
    .footer {
        &-item {
            a {
                text-decoration: none;
                transition: $trans;
            }
            span {
                color: rgb(var(--text-primary-color));
                text-decoration: none;
                transition: $trans;
            }
            &:hover {
                span {
                    color: rgb(var(--theme-primary-color));
                }
            }
        }
    }
</style>