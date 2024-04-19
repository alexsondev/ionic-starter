<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet/>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>{{ $t('tabs.home.label') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>{{ $t('tabs.search.label') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>{{ $t('tabs.settings.label') }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { home, settings, search } from 'ionicons/icons';
definePageMeta({
  alias: '/',
});

</script>
