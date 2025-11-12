export const TOKEN = "ORZU_TOKEN";
export const PROFILE = "ORZU_PROFILE";
export const LANGUAGE = "ORZU_LANGUAGE";
export const THEME = "ORZU_THEME";

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
