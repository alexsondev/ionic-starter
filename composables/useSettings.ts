import { Preferences } from '@capacitor/preferences';

export interface Settings {
  language: string;
  darkMode: boolean;
  notifications: boolean;
}

export const useSettings = () => {
  const SETTINGS = 'settings';
  const settings = ref<Settings>({
    language: 'en',
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    notifications: true,
  });

  const cacheSettings = () => {
    console.log("🚀 ~ cacheSettings ~ settings:", settings)
    Preferences.set({
      key: SETTINGS,
      value: JSON.stringify(settings.value),
    });
  };



  const loadSettings = async () => {
    console.log("🚀 ~ loadSettings ~ settings.value:", settings.value)
    const savedSettings = await Preferences.get({ key: SETTINGS });
    settings.value = savedSettings.value ? JSON.parse(savedSettings.value) : settings.value;
    setDarkMode(settings.value.darkMode);
    setLanguage(settings.value.language);
  }

  const updateSettings = (newSettings: Partial<Settings>) => {
    settings.value = { ...settings.value, ...newSettings };
  }

  const setDarkMode = (dark: boolean) => {
    console.log(dark)
    // document.body.classList.toggle('ion-palette-dark', dark);
    document.documentElement.classList.toggle('ion-palette-dark', dark);

    updateSettings({ darkMode: dark });
  };

  const i18n = useI18n();
  const setLanguage = (language: string) => {
    i18n.setLocale(language);
    updateSettings({ language });
  }

  onMounted(loadSettings);
  watch(settings, cacheSettings);

  return {
    updateSettings,
    settings,
    setDarkMode,
    setLanguage,
  }

}
