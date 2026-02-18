import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Userlist } from './userlist/userlist';
import { Header } from './reusableComponents/header/header';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'form',
        component: Form,
    },
    {
        path: 'userlist',
        component: Userlist,
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
