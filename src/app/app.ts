import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  films: any[] = [];
  recherche: string = '';

  constructor(
    private filmService: FilmService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe({
      next: (data: any) => {
        this.films = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur getFilms :', err)
    });
  }

  filmsFiltres() {
    return this.films.filter(f =>
      f.titre.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }

  voirDetail(id: string) {
    this.router.navigate(['/film', id]);
  }
}