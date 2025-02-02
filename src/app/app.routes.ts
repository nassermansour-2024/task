import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent, title: "Elevate Task"},
    {path: "products", component: ProductsComponent, title:"Products"},
    { path: 'product/:id', component: ProductDetailsComponent, title: "Product details"},
    {path: "**", component: NotFoundComponent, title:"Page Not Found"},
];
