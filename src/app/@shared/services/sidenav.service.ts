import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private drawer!: MatDrawer;

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggleSidenav() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  openSidenav() {
    if (this.drawer) {
      this.drawer.open();
    }
  }

  closeSidenav() {
    if (this.drawer) {
      this.drawer.close();
    }
  }
}
