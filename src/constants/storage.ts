export const TOKEN = 'KOTIB_AI_TOKEN';
export const PROFILE = 'KOTIB_AI_PROFILE';
export const LANGUAGE = 'KOTIB_AI_LANGUAGE';
export const THEME = 'KOTIB_AI_COLOR';

export const STORAGE_KEYS = {
  TOKEN,
  PROFILE,
  LANGUAGE,
  THEME,
};

export const token = localStorage.getItem(TOKEN);
export const profile = localStorage.getItem(PROFILE);
export const language = localStorage.getItem(LANGUAGE);
export const theme = localStorage.getItem(THEME);
