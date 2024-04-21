#!/bin/bash
LIP=$(ipconfig getifaddr en0)

echo "🍦 Starting local development to ios device - ensure local dev server is running already"
echo "🏗️ Type checking and building for development..."
pnpm generate
echo "🔃 Capacitor installation, podfile installation, sync and copy to app distribution folders..."
npx cap sync ios --no-build
echo "🏃 Select an iOS device to run the build at local ip address ${LIP} on..."
eval "npx cap run ios -l --livereload-url=http://${LIP}:3000  --external --mode development"
