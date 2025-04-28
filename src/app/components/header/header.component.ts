import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedCoffee: string | null = null;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.selectedCoffee = this.coffeeService.getSelectedCoffee();
  }
}