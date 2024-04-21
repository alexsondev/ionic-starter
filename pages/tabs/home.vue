<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('tabs.home.label') }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :color="settings.darkMode ? 'dark' : 'light'">
      <ion-header collapse="condense">
        <ion-toolbar color="transparent">
          <ion-title size="large">{{ $t('tabs.home.label') }}</ion-title>

        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Photos</ion-card-subtitle>
          
        </ion-card-header>
        <ion-grid>
          <ion-row>
            <ion-col v-for="photo in photos" :key="photo.filepath" size="6">
              <ion-img :src="photo.webviewPath" class="w-full h-40 object-cover" @click="showActionSheet(photo)" />
            </ion-col>
          </ion-row>
        </ion-grid>



      </ion-card>

      <ion-fab slot="fixed" vertical="bottom" horizontal="center">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { actionSheetController } from '@ionic/vue';

const { photos, takePhoto, deletePhoto } = usePhotoGallery();
const { settings } = useSettings();

const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
};



</script>
