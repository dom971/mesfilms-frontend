import { Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list';
import { FilmDetailComponent } from './film-detail/film-detail';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'film/:id', component: FilmDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/login' }
];