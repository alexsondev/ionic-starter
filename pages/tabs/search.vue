<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('tabs.search.label') }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :color="settings.darkMode ? 'dark' : 'light'">
      <ion-header collapse="condense">
        <ion-toolbar color="transparent">
          <ion-title size="large">{{ $t('tabs.search.label') }}</ion-title>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const { settings } = useSettings();
</script>
