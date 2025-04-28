import { Component } from '@angular/core';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css']
})
export class DessertListComponent {
  desserts = [
    { id: 1, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake' },
    { id: 2, name: 'Cheesecake', description: 'Creamy and tangy cheesecake' },
    { id: 3, name: 'Tiramisu', description: 'Classic Italian dessert' },
    { id: 4, name: 'Macarons', description: 'Delicate and colorful French cookies' }
  ];
}
