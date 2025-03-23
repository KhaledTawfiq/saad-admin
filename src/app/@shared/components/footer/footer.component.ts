import { Component } from '@angular/core';
import { UserInfoRoutes } from '../../../@core/helpers/allRoutes.helper';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
UserInfoRoutes = new UserInfoRoutes();
}
