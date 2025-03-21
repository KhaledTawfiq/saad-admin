import { Component, ElementRef, inject, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { I18nService, languageKey } from '../../../../assets/i18n/i18n.service';
import { isPlatformBrowser } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { AllRoutes, DashRoutes } from '../../../@core/helpers/allRoutes.helper';
import { IconComponent } from '../icon/icon.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { CredentialsService } from '../../services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,IconComponent,HeaderSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { 'ngSkipHydration': '' } // 🔥 Disables hydration for this entire component
})
export class HeaderComponent {
  @ViewChild('menuElement') menuElement!: ElementRef;
  @ViewChild('header') headerElement!: ElementRef;
  dashRoutes = new DashRoutes();
  public i18nService = inject(I18nService);
  public credentialsService = inject(CredentialsService);
  private router = inject(Router);
    allRoutes = AllRoutes;
  isLogin = false;

  toggleLanguage() {
    const currentLang = this.i18nService.language;
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    localStorage.setItem(languageKey, newLang);
    window.location.reload();
    this.i18nService.language = newLang;
  }
  logout() {
    this.credentialsService.clearCredentials();
    this.router.navigate([this.allRoutes.auth.login.route]);
  }
}
