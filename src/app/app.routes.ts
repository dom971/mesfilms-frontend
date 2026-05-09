import { Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list';
import { FilmDetailComponent } from './film-detail/film-detail';

export const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailComponent }
];