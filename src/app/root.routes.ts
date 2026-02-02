import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './auth/login/login';
import { MainLayout } from './layout/layout/layout';
import { SignUp } from './auth/sign-up/sign-up';

export const routes: Routes = [
  {path: 'main', component:MainLayout, children: [
    {path: 'dashboard', component:Dashboard},
    {path: '', redirectTo: '/main/dashboard', pathMatch: 'full'}
  ]},
  {path: 'login', component:Login},
  {path: 'sign-up', component:SignUp},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
