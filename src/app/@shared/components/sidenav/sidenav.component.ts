import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { AllRoutes } from '../../../@core/helpers/allRoutes.helper';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [IconComponent,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  allRoutes = AllRoutes;
  sideNavList = [
    { name: 'معلومات المستخدم', icon: 'home', route: this.allRoutes.userInfo.base.route },
    { name: 'قائمة الدورات', icon: 'courses', route: this.allRoutes.courses.base.route },
    { name: 'التقويم', icon: 'calendar-Month', route: this.allRoutes.calender.base.route },
    { name: 'البرامج الأكاديمية', icon: 'academic', route: this.allRoutes.academicPrograms.base.route }
  ];
}
