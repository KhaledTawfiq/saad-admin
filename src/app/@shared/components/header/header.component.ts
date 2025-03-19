import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { I18nService, languageKey } from '../../../../assets/i18n/i18n.service';
import { isPlatformBrowser } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { DashRoutes } from '../../../@core/helpers/allRoutes.helper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { 'ngSkipHydration': '' } // 🔥 Disables hydration for this entire component
})
export class HeaderComponent {
  @ViewChild('menuElement') menuElement!: ElementRef;
  @ViewChild('header') headerElement!: ElementRef;
  dashRoutes = new DashRoutes();
  constructor(private renderer: Renderer2,public i18nService: I18nService, @Inject(PLATFORM_ID) private platformId: Object) { }
  isSearchOpen = false;
  isMenuOpen = false;
  isMegaMenuOpen = false;
  isLogin = false;


  toggleLanguage() {
    const currentLang = this.i18nService.language;
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(languageKey, newLang);
      window.location.reload();
    }
    this.i18nService.language = newLang;
  }
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleMenu() {
    const headerElement = this.headerElement.nativeElement; // Reference to the header element
    const menuElement = this.menuElement.nativeElement; // Reference to the menu element

    if (menuElement.classList.contains('header__nav--show')) {
      this.renderer.removeClass(menuElement, 'header__nav--show');
      this.renderer.removeClass(headerElement, 'header--show');
    } else {
      this.renderer.addClass(menuElement, 'header__nav--show');
      this.renderer.addClass(headerElement, 'header--show');
    }
  }



  toggleMegaMenu() {
    if (window.innerWidth <= 768) {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    }

  }
}
