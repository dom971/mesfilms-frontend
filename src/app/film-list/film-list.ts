import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './film-list.html',
  styleUrl: './film-list.css'
})
export class FilmListComponent {

  films: any[] = [];
  boites: number[] = [];
  recherche: string = '';
  boiteSelectionnee: number | null = null;

  constructor(
    private filmService: FilmService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) {
    this.loadFilms();
    this.loadBoites();
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

  loadBoites() {
    this.filmService.getBoites().subscribe({
      next: (data: any) => {
        this.boites = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur getBoites :', err)
    });
  }

  filmsFiltres() {
    return this.films.filter(f => {
      const matchTitre = f.titre.toLowerCase().includes(this.recherche.toLowerCase());
      const matchBoite = !this.boiteSelectionnee || f.boite === Number(this.boiteSelectionnee);
      return matchTitre && matchBoite;
    });
  }

  voirDetail(id: string) {
    this.router.navigate(['/film', id]);
  }

  logout() {
    this.authService.logout();
  }
}