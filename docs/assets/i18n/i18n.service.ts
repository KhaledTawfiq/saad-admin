import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import arAR from './ar.json';
import enUS from './en.json';

export const languageKey = 'language';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];
  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.translateService.setTranslation('en', enUS);
    this.translateService.setTranslation('ar', arAR);
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(languageKey);
      this.language = savedLang && savedLang !== 'undefined' ? savedLang : this.defaultLanguage;
      localStorage.setItem(languageKey, this.language);
    } else {
      this.language = this.defaultLanguage; // Default to `defaultLanguage` on the server
    }

    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(languageKey, event.lang);
      }
    });

    this.setDirection(this.language);
  }

  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  set language(language: string) {
    let newLanguage = language || this.defaultLanguage;
    this.translateService.use(newLanguage);
  }

  get language(): string {
    return this.translateService.currentLang;
  }

  setDirection(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      htmlEl.setAttribute('lang', lang);
    }
  }
}
