import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../assets/i18n/i18n.service';
import { environment } from '../environments/environment';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { HeaderComponent } from './@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private i18nService: I18nService,) { }
  ngOnInit(): void {
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
  }
  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
