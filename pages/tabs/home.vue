<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('tabs.home.label') }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $t('tabs.home.label') }}</ion-title>

        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col v-for="photo in photos" :key="photo.filepath" size="6">
            <ion-img :src="photo.webviewPath"/>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab slot="fixed" vertical="bottom" horizontal="center">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"/>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { camera, trash, close } from 'ionicons/icons';

const { photos, takePhoto } = usePhotoGallery();


</script>
