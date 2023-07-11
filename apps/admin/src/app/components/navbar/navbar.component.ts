import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      routerLink: '/dashboard',
    },
    {
      label: 'Dostawa',
      routerLink: '/delivery',
    },
    {
      label: 'Kontakt',
      routerLink: '/contact',
    },
  ];
}
