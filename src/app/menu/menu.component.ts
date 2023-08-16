import { Component } from '@angular/core';

interface MenuItem {
  tabs: string[];
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  id: number;
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css'],
})
export class MenuComponent {
  activeTab: string = 'todo';

  tabs: string[] = ['todo', 'hamburguesas', 'pizzas', 'carne', 'pasta', 'ensaladas', 'postres', 'bebidas'];

  menuItems: MenuItem[] = [
    {
      tabs: ['todo', 'pizzas', 'postres'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-1.jpg',
      name: 'Double Cheese Pizza',
      description: 'Doble queso, doble sabor.',
      price: '15.30€',
      id: 1
    },
    {
      tabs: ['todo', 'ensaladas'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-2.jpg',
      name: 'Marisco',
      description: 'Delicias marinas frescas y sabrosas.',
      price: '23.99€',
      id: 2
    },
    {
      tabs: ['todo', 'hamburguesas', 'carne'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-3.png',
      name: 'DOUBLE MAC BURGER',
      description: 'Doble placer en cada bocado.',
      price: '13.80€',
      id: 3
    },
    {
      tabs: ['todo', 'pasta'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-4.jpg',
      name: 'PASTA',
      description: 'Sabor auténtico en cada tenedor.',
      price: '23.99€',
      id: 4
    },
    {
      tabs: ['todo', 'hamburguesas', 'carne'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-5.jpg',
      name: 'BEEF CHEESE BURGER',
      description: 'Exquisita hamburguesa artesanal.',
      price: '23.99€',
      id: 5
    },
    {
      tabs: ['todo', 'pizzas', 'carne'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-6.jpg',
      name: 'GRAND ITALIANO PIZZA',
      description: 'Sabor italiano en cada rebanada.',
      price: '23.99€',
      id: 6
    },
    {
      tabs: ['todo', 'bebidas'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-7.jpg',
      name: 'LEMONADE',
      description: 'Frescura cítrica en cada sorbo.',
      price: '23.99€',
      id: 7
    },
    {
      tabs: ['todo', 'hamburguesas', 'carne'],
      imageUrl: 'https://restfood.onlywebcoding.com.ua/images/product-8.jpg',
      name: 'CHICKEN BURGER',
      description: 'Jugosa perfección entre panes.',
      price: '23.99€',
      id: 8
    },
  ];

  getFilteredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.tabs.includes(this.activeTab));
  }

  itemInCurrentTab(item: MenuItem): boolean {
    return item.tabs.includes(this.activeTab);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}

