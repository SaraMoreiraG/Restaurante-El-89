import { Component, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private scrollService: ScrollService) {}

  title = 'restaurante-el89';

  hasScrolledPastHome = false;

  @HostListener('window:scroll', ['$event'])

  onScroll(event: Event) {
    const scrollPosition = window.scrollY;

    // Calculate the threshold based on the height of the "home" section
    const threshold = window.innerHeight - 750;

    // Check if the scroll position is beyond the threshold
    this.hasScrolledPastHome = scrollPosition > threshold;
  }

  scrollToBookingTable() {
    this.scrollService.scrollTo('booking-table');
  }
}
