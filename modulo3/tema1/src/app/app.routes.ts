import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
