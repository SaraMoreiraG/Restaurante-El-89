import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  isSmallScreen = window.innerWidth <= 992;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 992;
    // Hide the menu when resizing from large to small screen
    if (this.isSmallScreen) {
      this.showMenu = false;
    }
  }

  constructor() {
    // Trigger the initial check for screen size
    this.onResize({ target: { innerWidth: window.innerWidth } });
  }
}
