import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../assets/i18n/i18n.service';
import { environment } from '../environments/environment';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { HeaderComponent } from './@shared/components/header/header.component';
import { CredentialsService } from './@shared/services/credentials.service';
import { CommonModule } from '@angular/common';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './@shared/services/sidenav.service';
import { SidenavComponent } from './@shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    MatSidenavModule,
    SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public i18nService = inject(I18nService);
  public credentialsService = inject(CredentialsService);
  public sidenavService = inject(SidenavService);
  showFiller = false;
  @ViewChild('drawer') drawer!: MatDrawer; // Get reference to the drawer

  ngOnInit(): void {
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
  }
  ngAfterViewInit() {
    this.sidenavService.setDrawer(this.drawer);
  }
  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
