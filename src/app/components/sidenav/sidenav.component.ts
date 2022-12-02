import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  toggle() {
    this.sidenav.toggle();
  }

  logout() {
    this.authService.logout();
  }
}
