import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'form',
        component: Form,
    },
    {
        path: 'product',
        component: Products
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        component: Login
    }
];
