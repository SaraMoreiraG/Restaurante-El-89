import { Component } from '@angular/core';

@Component({
  selector: 'card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
})
export class CardCarouselComponent {
  cards = [
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },
    { img: 'https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png', title: 'BURGER', description: 'Lorem ipsum dolor sit, amet consectetur adipisci velit', price:'$12,3' },

    // Add more cards as needed
  ];

  // Initialize an empty array for slides
  slides: any[] = [];
}
