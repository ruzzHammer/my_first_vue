<template>
    <ul class="locale-switcher">
        <li v-for="locale in locales" 
           :key="locale" 
           @click="switchLocale(locale); checkLocaleClassToBody(); selected = locale" 
           :class="{active: selected == locale}" 
           :id="locale">
            {{ $t('locales.' + locale) }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  methods: { 
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem('lang', locale);
      }
    },
    getDefaultLocaleItem() {
      this.locales.forEach(locale => {
        if (locale === this.$i18n.locale) {
          this.selected = locale;
        }
      });
    },
    checkLocaleClassToBody() {
      if (this.$i18n.locale == 'ru') {
        document.body.classList.add('locale-ru')
      } else {
        document.body.classList.remove('locale-ru')
      }
    },
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
      selected: undefined
    }
  },
  mounted() {
      this.getDefaultLocaleItem();
      this.checkLocaleClassToBody();
  }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/_app.scss';
    .locale-switcher {
        display: flex;
        max-width: fit-content;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 6px;
        li {
            @extend .h6;
            line-height: 18px;
            text-transform: uppercase;
            color: rgb(var(--theme-primary-color));
            opacity: .5;
            cursor: pointer;
            &.active {
                opacity: 1;
            }
        }
    }
    .non-home {
      .locale-switcher {
        li {
          color: #fff;
        }
      }
    }
</style>