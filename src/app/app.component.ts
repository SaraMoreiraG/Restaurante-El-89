import { Component, OnInit, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  hasScrolledPastHome = false;

  constructor(
    private scrollService: ScrollService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initialize Magnific Popup for elements within the #about-us section
    this.initializeMagnificPopup();
  }

  initializeMagnificPopup() {
    const popupLinks = this.elementRef.nativeElement.querySelectorAll('#about-us .popup-youtube');
    popupLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', (event: Event) => {
        event.preventDefault();
        const videoUrl = link.getAttribute('href');
        if (videoUrl) {
          this.openPopup(videoUrl);
        }
      });
    });
  }

  openPopup(videoUrl: string) {
    $.magnificPopup.open({
      items: {
        src: videoUrl
      },
      type: 'iframe'
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight - 750;
    this.hasScrolledPastHome = scrollPosition > threshold;
  }

  scrollToBookingTable() {
    this.scrollService.scrollTo('booking-table');
  }
}
