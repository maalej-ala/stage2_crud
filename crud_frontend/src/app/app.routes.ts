import { Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';

export const routes: Routes = [
  { path: 'products', component: ProductManagementComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }
];