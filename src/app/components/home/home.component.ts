import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Coffee } from '../../models/coffee.model';
import { SearchComponent } from "../search/search.component";
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  coffees: Coffee[] = [];
  filteredCoffees: Coffee[] = [];
  selectedProduct: string | null = null;
  desserts = [
    { id: 1, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: 250, image: 'https://tinyurl.com/yc6dux5a' },
    { id: 2, name: 'Cheesecake', description: 'Creamy and tangy cheesecake', price: 300, image: 'https://tinyurl.com/454u834c' },
    { id: 3, name: 'Tiramisu', description: 'Classic Italian dessert', price: 350, image: 'https://tinyurl.com/yjeu2pbh' },
    { id: 4, name: 'Macarons', description: 'Delicate French cookies', price: 200, image: 'https://tinyurl.com/2ub3dep7' }
  ];
  filteredDesserts = this.desserts;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffees = this.coffeeService.getCoffees();
    this.filteredCoffees = this.coffees; // Display all coffees initially
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    if (this.searchTerm.trim() === '') {
      this.filteredCoffees = this.coffees; // Reset to all coffees if search term is empty
      this.filteredDesserts = this.desserts; // Reset to all desserts if search term is empty
    } else {
      this.filteredCoffees = this.coffees.filter(coffee =>
        coffee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.filteredDesserts = this.desserts.filter(dessert =>
        dessert.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  onOrderNow(productName: string) {
    this.selectedProduct = productName;
  }
}