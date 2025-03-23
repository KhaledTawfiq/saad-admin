import { Component, Input } from '@angular/core';
import { UserInfoRoutes } from '../../../@core/helpers/allRoutes.helper';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  UserInfoRoutes = new UserInfoRoutes();
  dataLength: number = 0;
  @Input() data: any = [];
  @Input() current: string = '';
  @Input() queryParams: string = '';
  @Input() spaceBottom: string = 'xl';
  @Input() white: boolean = false;

}
