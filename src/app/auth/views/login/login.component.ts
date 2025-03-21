import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CredentialsService } from '../../../@shared/services/credentials.service';
import { Credentials } from '../../../@shared/models/credentials.model';
import { LoadingComponent } from '../../../@shared/components/loading/loading.component';
import { Router } from '@angular/router';
import { AllRoutes } from '../../../@core/helpers/allRoutes.helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,LoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public credentialsService = inject(CredentialsService);
  private router = inject(Router);
  allRoutes = AllRoutes;
  isLogin = false;

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    if (form.value) {
      this.isLogin = true;
      setTimeout(() => {
        this.isLogin = false;
        const credentials : Credentials = { token: form.value.email, username: form.value.password };
        this.credentialsService.saveCredentials(credentials);
        this.router.navigate([this.allRoutes.dash.base.route]);
      }, 3000);
    }
  }

  // ngOnInit(): void {
  //   if (this.credentialsService.isAuthenticated()) {
  //     console.log('User is already logged in:', this.credentialsService.getCredentials());
  //   }
  // }



}
