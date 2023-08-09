import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private scrollService: ScrollService) {}

  title = 'restaurante-el89';

  scrollToBookingTable() {
    this.scrollService.scrollTo('booking-table');
  }
}
