import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { language } from "src/constants/storage";
import { languageEn } from "src/language/en";
import { languageRu } from "src/language/ru";
import { languageUz } from "src/language/uz";
import { ProviderProps } from "src/lib/type";

function LanguageProvider({ children }: ProviderProps) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: languageEn },
      ru: { translation: languageRu },
      uz: { translation: languageUz },
    },
    fallbackLng: language || "en",
    interpolation: { escapeValue: false },
  });
  return children;
}

export default LanguageProvider;
