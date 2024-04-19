#!/bin/bash

# command = start
command=$1
# artifact = app
artifact=$2

# project_name = the app name
project_name=$3

# alpha start app myapp


if [ -z "$project_name" ];
then 
echo 'Nome do projeto não informado'
exit 1
fi

if [ -d "$project_name" ];
then
echo Diretório $project_name já existe
exit 1
fi


npx nuxi@latest init $project_name


read -p "Enter firebase apiKey " apiKey
read -p "Enter firebase projectId " projectId
read -p "Enter firebase messagingSenderId " messagingSenderId
read -p "Enter firebase appId " appId
read -p "Enter firebase measurementId " measurementId
read -p "Enter dev port server [3000]: " devPort

devPort=${devPort:-3000}


cd $project_name


npx nuxi@latest module add ionic
npx nuxi@latest module add tailwindcss
npx nuxi@latest module add i18n
npx nuxi@latest module add vuefire
npx nuxi@latest module add eslint

pnpm add @capacitor/core @capacitor/camera @capacitor/preferences @capacitor/filesystem
pnpm add @vueuse/nuxt @vueuse/core animate.css ionicons @ionic/vue
pnpm add @ionic/pwa-elements
pnpm add -D @nuxt/eslint-config eslint eslint-config-love sass

mkdir scripts
echo "ionic integrations enable capacitor" > scripts/capacitor.sh
echo "ionic capacitor add ios" >> scripts/capacitor.sh
echo "ionic capacitor add android" >> scripts/capacitor.sh
chmod +x ./scripts/capacitor.sh

echo "ssr=false" > .nuxtrc
echo "vuefire.auth=true" >> .nuxtrc
echo "vuefire.config.apikey=${apiKey}" >> .nuxtrc
echo "vuefire.config.projectId=${projectId}" >> .nuxtrc
echo "vuefire.config.authDomain=${projectId}.firebaseapp.com" >> .nuxtrc
echo "vuefire.config.storageBucket=${projectId}.appspot.com" >> .nuxtrc
echo "vuefire.config.messagingSenderId=${messagingSenderId}" >> .nuxtrc
echo "vuefire.config.appId=${appId}" >> .nuxtrc
echo "vuefire.config.measurementId=${measurementId}" >> .nuxtrc
echo "ionic.config.mode=ios" >> .nuxtrc
echo "devServer.port=$devPort" >> .nuxtrc


# echo "imports.dirs=['./store', './types']" >> .nuxtrc
# echo "i18n.locales=['pt', 'en', 'es']" >> .nuxtrc

cp -r ~/projects/starter/pages ./pages
cp -r ~/projects/starter/components ./components
cp -r ~/projects/starter/composables ./composables
cp -r ~/projects/starter/locales ./locales
cp -r ~/projects/starter/assets ./assets
cp ~/projects/starter/eslint.config.mjs ./
cp ~/projects/starter/nuxt.config.ts ./
cp ~/projects/starter/tailwind.config.js ./
cp ~/projects/starter/i18n.config.ts ./

rm app.vue

code .


# ionic config set -g npmClient pnpm

# ionic integrations enable capacitor
# ionic capacitor add ios
# ionic capacitor add android

# pnpm dev -o
