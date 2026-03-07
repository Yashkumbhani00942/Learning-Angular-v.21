import { Routes } from '@angular/router';
<<<<<<< Updated upstream
import { Home } from './home/home';
import { Form } from './form/form';
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Userlist } from './userlist/userlist';
=======
import { Login } from './auth-components/login/login';
import { Registration } from './auth-components/registration/registration';
import { Dashboard } from './dashboard-main/dashboard/dashboard';
import { Home } from './dashboard-main/home/home';
import { Products } from './dashboard-main/products/products';
import { About } from './dashboard-main/about/about';
import { Contact } from './dashboard-main/contact/contact';
import { Form } from './dashboard-main/form/form';
import { Userlist } from './dashboard-main/userlist/userlist';
import { PageNotFound } from './dashboard-main/page-not-found/page-not-found';

>>>>>>> Stashed changes

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
