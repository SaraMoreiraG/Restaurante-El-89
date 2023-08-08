import { Component } from '@angular/core';

interface MenuItem {
  tabs: string[];
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css']
})
export class MenuComponent {
  activeTab: string = 'all';

  tabs: string[] = ['all', 'burguers', 'pizzas', 'steaks', 'pasts', 'salads', 'deserts', 'drinks'];

  menuItems: MenuItem[] = [
    {
      tabs: ['all', 'pizzas'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-1.jpg',
      name: 'Double Cheese Pizza',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$15.30'
    },
    {
      tabs: ['all', 'salads'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-2.jpg',
      name: 'Seafood',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
    {
      tabs: ['all', 'burguers'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-3.png',
      name: 'DOUBLE MAC BURGER',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$13.80'
    },
    {
      tabs: ['all', 'pasts'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-4.jpg',
      name: 'PASTA',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
    {
      tabs: ['all', 'burguers'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-5.jpg',
      name: 'BEEF CHEESE BURGER',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
    {
      tabs: ['all', 'pizzas'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-6.jpg',
      name: 'GRAND ITALIANO PIZZA',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
    {
      tabs: ['all', 'drinks'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-7.jpg',
      name: 'LEMONADE',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
    {
      tabs: ['all', 'burguers'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-8.jpg',
      name: 'CHICKEN BURGER',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',
      price: '$23.99'
    },
  ];

  getFilteredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.tabs.includes(this.activeTab));
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}

