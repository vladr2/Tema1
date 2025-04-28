import { Injectable, signal } from '@angular/core';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees = signal<Coffee[]>([
    { id: 1, name: 'Lungo Coffee', description: 'A long time coffee gets stopped with a meal', price: 199, image: 'lungo.jpg' },
    { id: 2, name: 'Dolgono Coffee', description: 'stripped coffee works using water a while', price: 158, image: 'dolgono.jpg' }
  ]);

  private selectedCoffee = signal<string>('');

  getCoffees(): Coffee[] {
    return [
      { id: 1, name: 'Espresso', description: 'Strong and bold coffee', price: 250, image: 'https://tinyurl.com/36t9t4jt' },
      { id: 2, name: 'Latte', description: 'Smooth and creamy coffee', price: 300, image: 'https://tinyurl.com/5d335wdf' },
      { id: 3, name: 'Cappuccino', description: 'Rich and foamy coffee', price: 350, image: 'https://tinyurl.com/57vhkeyr' },
      { id: 4, name: 'Americano', description: 'Classic black coffee', price: 200, image: 'https://tinyurl.com/ys3rub25' }
    ];
  }

  searchCoffees(term: string): Coffee[] {
    return this.getCoffees().filter(coffee =>
      coffee.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  setSelectedCoffee(name: string) {
    this.selectedCoffee.set(name);
  }

  getSelectedCoffee() {
    return this.selectedCoffee();
  }
}