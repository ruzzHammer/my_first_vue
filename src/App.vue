<template>
  <app-header></app-header>
  <info-card 
  :name="$t('infoCard.name')" 
  avatar="avatar.jpg" 
  :catchPhrase="$t('infoCard.catchPhrase')"
  email="18russell.1998@gmail.com"
  :location="$t('infoCard.location')"
  phoneNumber="+7(980)045-71-26"
  :socials="[
    {
      link: 'https://vk.com/ruslan_khakhonin',
      icon: 'vk'
    },
    {
      link: 'https://wa.me/79800457126',
      icon: 'wa'
    }
  ]"
  >
  </info-card>
  <app-footer></app-footer>
</template>

<script>
import InfoCard from './components/InfoCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    InfoCard,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/scss/_app.scss';
</style>
