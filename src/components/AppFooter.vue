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
        &-item {
            color: transparentize($text-color, .5);
            text-decoration: none;
            @extend .h6;
            margin-bottom: 0;
            transition: $trans;
            &:hover {
                color: transparentize($theme-color, .2);
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
                color: $text-color;
                text-decoration: none;
                transition: $trans;
            }
            &:hover {
                span {
                    color: $theme-color;
                }
            }
        }
    }
</style>