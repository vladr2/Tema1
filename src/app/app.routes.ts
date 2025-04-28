import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'coffees',
        loadComponent: () => import('./components/coffee-list/coffee-list.component').then(m => m.CoffeeListComponent)
    },
    {
        path: 'desserts',
        loadComponent: () => import('./components/dessert-list/dessert-list.component').then(m => m.DessertListComponent)
    }
];