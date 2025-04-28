import { Component, signal } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Coffee } from '../../models/coffee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent {
  searchTerm = signal('');
  coffees = signal<Coffee[]>([]); // Initialize with an empty array

  constructor(private coffeeService: CoffeeService) {
    this.coffees.set(this.coffeeService.getCoffees()); // Initialize after coffeeService is available
  }

  onSearch() {
    this.coffees.set(this.coffeeService.searchCoffees(this.searchTerm()));
  }

  onOrderNow(coffeeName: string) {
    this.coffeeService.setSelectedCoffee(coffeeName);
  }
}