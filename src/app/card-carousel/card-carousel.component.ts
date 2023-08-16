import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'card-carousel',
  templateUrl: './card-carousel.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { showIndicators: false, showControls: false } }
  ],
  styleUrls: ['./card-carousel.component.css'],
})
export class CardCarouselComponent implements OnInit {
  cards: { img: string; title: string; description: string; price: string }[] = [
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Exquisita hamburguesa artesanal.', price: '12,3€' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-3.jpg', title: 'Beef Burger Meal', description: 'Satisfacción en cada bocado.', price: '20€' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-4.jpg', title: 'Cheese Pizza', description: 'Doble queso, doble sabor.', price: '15€' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-5.png', title: 'Ceaser Salad', description: 'Frescura y sabor en cada hoja.', price: '18€' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-2.jpg', title: 'Pasta', description: 'Sabor auténtico en cada tenedor.', price: '22€' },
  ];

  // Get a reference to the carousel component
  @ViewChild('carousel', { static: true }) carousel!: CarouselComponent;

  ngOnInit() {
    // Initialize the carousel with 4 visible cards
    this.carouselItems = this.cards.slice(0, 4);

    // Start autoplay
    this.startAutoplay();
  }

  carouselItems: any[] = [];
  interval: any;

  startAutoplay() {
    // Set autoplay interval to 3 seconds (3000 ms)
    this.interval = setInterval(() => {
      this.slideNext();
    }, 3000);
  }

  stopAutoplay() {
    // Clear the autoplay interval
    clearInterval(this.interval);
  }

  slideNext() {
    // Shift the cards array by one position to the left
    const shiftedCard = this.cards.shift();
    if (shiftedCard) {
      this.cards.push(shiftedCard);
    }

    // Update the carouselItems with the next 4 cards
    this.carouselItems = this.cards.slice(0, 4);
  }

  slidePrev() {
    // Pop the last card from the cards array and unshift it to the beginning
    const poppedCard = this.cards.pop();
    if (poppedCard) {
      this.cards.unshift(poppedCard);
    }

    // Update the carouselItems with the previous 4 cards
    this.carouselItems = this.cards.slice(0, 4);
  }
}
