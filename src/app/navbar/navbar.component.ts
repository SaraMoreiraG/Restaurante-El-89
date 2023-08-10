import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  isSmallScreen = window.innerWidth <= 992;
  isTransparentBg = true;

  menuItems = [
    { label: 'HOME', link: '#home' },
    { label: 'ABOUT US', link: '#about-us' },
    { label: 'TEAM', link: '#chefs' },
    { label: 'MENU', link: '#menu' },
    { label: 'GALLERY', link: '#gallery' },
    { label: 'CONTACT', link: '#contacts' }
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 992;
    // Hide the menu when resizing from large to small screen
    if (this.isSmallScreen) {
      this.showMenu = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled and remove the transparent background class
    this.isTransparentBg = window.scrollY < 90;
  }

  constructor() {
    // Trigger the initial check for screen size
    this.onResize({ target: { innerWidth: window.innerWidth } });
  }
}
