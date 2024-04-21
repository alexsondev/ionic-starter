<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('tabs.settings.label') }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :color="settings.darkMode ? 'dark' : 'light'">
      <ion-header collapse="condense">
        <ion-toolbar color="transparent">
          <ion-title size="large">{{ $t('tabs.settings.label') }}</ion-title>
          
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Tab 3 page" /> -->
      <ion-list inset>
        <ion-item>
          <ion-icon slot="start" :icon="languageOutline"></ion-icon>
          
          <ion-select :label="$t('tabs.settings.language')" class="text-right" :placeholder="$t('tabs.settings.selectLanguage')" :value="settings.language"
            @ion-change="setLanguage($event.detail.value)" interface="action-sheet">
            <ion-select-option value="pt">Português</ion-select-option>
            <ion-select-option value="en">English</ion-select-option>
            <ion-select-option value="es">Español</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-icon slot="start" :icon="moonOutline"></ion-icon>
          <ion-toggle :checked="settings.darkMode" @ion-change="setDarkMode($event.detail.checked)">
            <ion-label>{{ $t('tabs.settings.theme') }}</ion-label>
          </ion-toggle>
        </ion-item>

        <ion-item>
          <ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
          <ion-toggle :checked="settings.notifications"
            @ion-change="updateSettings({ notifications: $event.detail.checked })">
            <ion-label>{{ $t('tabs.settings.notifications') }}</ion-label>
            <ion-note color="medium">Unsubscribe at any time</ion-note>
          </ion-toggle>
        </ion-item>
      </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { moonOutline, languageOutline, notificationsOutline } from 'ionicons/icons';

const { settings, setLanguage, setDarkMode, updateSettings } = useSettings();

</script>
