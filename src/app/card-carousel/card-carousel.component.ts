import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
})
export class CardCarouselComponent implements OnInit {
  cards: { img: string; title: string; description: string; price: string }[] = [
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price: '$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'Card 2', description: 'Description for Card 2', price: '20$' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'Card 3', description: 'Description for Card 3', price: '15$' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'Card 4', description: 'Description for Card 4', price: '18$' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'Card 5', description: 'Description for Card 5', price: '22$' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'Card 6', description: 'Description for Card 6', price: '12$' },
    // Add more cards as needed
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
    // Set autoplay interval to 5 seconds (5000 ms)
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
