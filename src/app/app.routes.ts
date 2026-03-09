import { Routes } from '@angular/router';
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


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'registration',
    component: Registration,
  },
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'product',
        component: Products,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'contact',
        component: Contact,
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
        path: '404',
        component: PageNotFound,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
