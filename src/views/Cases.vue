<template>
  <info-card 
  :name="$t('infoCard.name')" 
  avatar="avatar.jpg" 
  :catchPhrase="$t('infoCard.catchPhrase')"
  email="18russell.1998@gmail.com"
  :location="$t('infoCard.location')"
  phoneNumber="+7 (980) 045-71-26"
  :socials="[
    {
      link: 'https://vk.com/ruslan_khakhonin',
      icon: 'vk'
    },
    {
      link: 'https://wa.me/79800457126',
      icon: 'wa'
    },
    {
      link: 'https://instagram.com/ruzzhammer',
      icon: 'insta'
    },
    {
      link: 'https://t.me/ruzzHammer',
      icon: 'tg'
    }
  ]"
  >
  </info-card>
  <app-projects></app-projects>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue';
import AppProjects from '@/components/AppProjects.vue';
export default {
  name: 'Home',
  components: {
    InfoCard,
    AppProjects
  }
}
</script>